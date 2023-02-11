import React, { useState } from "react";
import Form from "../components/Checkout/Form";
import Summary from "../components/Checkout/Summary";
import SuccessfullOrder from "../components/Checkout/SuccessfullOrder";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeAll } from "../store/CartProductListSlice";

export default function Checkout() {
  const [isOrder, setIsOrder] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (!isOrder) {
    document.body.style.overflow = "auto";
  }
  const showSuccessfullContent = () => {
    document.body.style.overflow = "hidden";
    setIsOrder(true);
    localStorage.removeItem("products");
    localStorage.removeItem("quantity");
    dispatch(removeAll());
    setTimeout(() => {
      setIsOrder(false);
      navigate("/");
    }, 1000);
  };

  return (
    <>
      {isOrder && <SuccessfullOrder />}
      <Form />
      <Summary showSuccessfullContentHandler={showSuccessfullContent} />
    </>
  );
}
