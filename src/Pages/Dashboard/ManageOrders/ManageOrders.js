import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import CancelOrder from "../MyOrders/CancelOrder";

const ManageOrders = () => {
  // get user
  const [user] = useAuthState(auth);

  const [orders, setOrders] = useState([]);

  const [order, setOrder] = useState(null);

  const email = user?.email;

  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      fetch(`https://infinite-lake-36259.herokuapp.com/orders`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }

          return res.json();
        })

        .then((data) => {
          setOrders(data);
        });
    }
  }, [orders, user, email, navigate]);

  const handleShipment = (id) => {
    const shipment = {
      shipment: true,
    };

    fetch(`https://infinite-lake-36259.herokuapp.com/order/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(shipment),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h1 className="profile-title text-primary">All Orders List</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Item</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Total Price</th>
              <th>Status</th>
              <th>Shipment or Cancel Order</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{order.buyerName}</td>
                <td>{order.tool}</td>
                <td>{order.quantity}</td>
                <td>{order.price}</td>
                <td>{order.price * order.quantity}</td>
                <td>
                  {order.price && !order.paid && <p className=" text-red-600 font-bold">Unpaid</p>}
                  {order.price && order.paid && !order.shipment && (
                    <div>
                      <span className="text-green-600 font-bold">Pending</span>
                      <p>
                        Transaction Id:{" "}
                        <span className="text-orange-600">{order.transactionId}</span>
                      </p>
                    </div>
                  )}
                  {order.price && order.paid && order.shipment && (
                    <div>
                      <p className="text-primary font-bold">Shipped</p>
                    </div>
                  )}
                </td>
                <td>
                  {order.price && order.paid && !order.shipment && (
                    <button
                      onClick={() => handleShipment(order._id)}
                      className="btn btn-xs btn-primary text-white font-bold"
                    >
                      Shipment
                    </button>
                  )}
                  {order.price && !order.paid && !order.shipment && (
                    <label
                      htmlFor="delete-modal"
                      onClick={() => setOrder(order)}
                      className="btn btn-xs btn-error text-white font-bold"
                    >
                      Cancel
                    </label>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {order && (
        <CancelOrder
          orders={orders}
          setOrders={setOrders}
          order={order}
          setOrder={setOrder}
        ></CancelOrder>
      )}
    </div>
  );
};

export default ManageOrders;
