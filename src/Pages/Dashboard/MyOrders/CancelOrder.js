import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useAdmin from "./../../../hooks/useAdmin";

const CancelOrder = ({ orders, setOrders, order, setOrder }) => {
  // get user state
  const [user] = useAuthState(auth);

  // get admin user
  const [admin] = useAdmin(user);

  // handle delete button
  const handleDelete = (id) => {
    const url = `https://aqueous-savannah-68941.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        const remaining = orders.filter((order) => order._id !== id);
        setOrders(remaining);
        setOrder(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="delete-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Hello{" "}
            <span className="text-green-600 font-bold">
              {(!admin && order.buyerName) || (admin && "Admin")}
            </span>
            ,
          </h3>

          <p className="py-4">
            Are You Sure to <span className="text-red-600 font-bold">cancel</span>{" "}
            <span className="text-primary font-bold">{order.tool}</span>'s order?
          </p>

          <div className="modal-action flex justify-center">
            <label
              onClick={() => handleDelete(order._id)}
              className="btn btn-error text-white font-bold w-50"
            >
              Yes
            </label>
            <label htmlFor="delete-modal" className="btn btn-primary text-white font-bold w-50">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelOrder;
