import React, { useEffect, useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Loading from "../../Shared/Loading/Loading";

const CheckoutForm = ({ order }) => {
  // use stripe hook
  const stripe = useStripe();
  const elements = useElements();

  // error
  const [cardError, setCardError] = useState("");

  // success
  const [success, setSuccess] = useState("");

  // transaction id set
  const [transactionId, setTransactionId] = useState("");

  // payment processing state set
  const [processing, setProcessing] = useState(false);

  // destructure order information
  const { _id, buyer, buyerName } = order;

  // payment secret
  const [clientSecret, setClientSecret] = useState("");

  // data fetch
  useEffect(() => {
    fetch("https://infinite-lake-36259.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data?.clientSecret);
        }
      });
  }, [order]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
      setProcessing(true);
    }

    if (processing) {
      return <Loading></Loading>;
    }

    // confirm card payment

    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: buyerName,
          email: buyer,
        },
      },
    });

    if (intentError) {
      setCardError(intentError?.message);
      setSuccess("");
      setProcessing(false);
    } else {
      setCardError("");
      setTransactionId(paymentIntent?.id);
      setSuccess("Congrats! Your payment is successful");

      // update payment on database

      const payment = {
        order: _id,
        transactionId: paymentIntent?.id,
      };

      fetch(`https://infinite-lake-36259.herokuapp.com/order/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          // console.log(data);
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm text-white font-bold mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || success}
        >
          Pay
        </button>
      </form>
      {cardError && <p className="text-red-600">{cardError}</p>}
      {success && (
        <div className="text-green-600">
          <p>{success}</p>
          <p>
            Your Transaction Id: <span className="text-orange-600 font-bold">{transactionId}</span>
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
