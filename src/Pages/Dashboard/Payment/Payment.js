import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1qzaEIR19OcQNAl1Sf82eXCV7O3rvxGyZk7rQomxNu3C0c0l8NkDuQU2saKLezJrnwOKUEwytlstbTUOwY8msU00vkA1Nsbc"
);

const Payment = () => {
  const { id } = useParams();

  const url = `https://infinite-lake-36259.herokuapp.com/orders/${id}`;

  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <div className="card w-50 max-w-lg bg-base-100 shadow-xl my-12">
        <div className="card-body">
          <p className="font-bold">
            Hello, <span className="text-green-600">{order?.buyerName}</span>
          </p>
          <h2 className="card-title">Please Pay for {order?.tool}</h2>
          <p>
            Your Orderd quantity is{" "}
            <span className="text-green-600">
              <b>{order?.quantity}</b>
            </span>{" "}
            pieces at per unit price{" "}
            <span className="text-green-600">
              <b>${order?.price}</b>
            </span>
          </p>
          <p>
            Please Pay{" "}
            <span className="text-secondary font-bold">${order?.price * order?.quantity}</span>
          </p>
        </div>
      </div>
      <div className="card w-50 max-w-lg shadow-2xl bg-base-100 my-12">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
