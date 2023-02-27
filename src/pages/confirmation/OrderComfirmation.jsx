import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { AlertBanner } from "../common/AlertBanner";

export const OrderConfirmation = ({ setOrderPhase }) => {
  const { resetOrder } = useOrderDetails();
  const [orderNumber, setOrderNumber] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .post(`http://localhost:3000/order`)
      .then((response) => setOrderNumber(response.data.orderNumber))
      .catch((_error) => setError(true));
  }, []);

  const handleClick = () => {
    resetOrder();
    setOrderPhase("inProgress");
  };

  const newOrderButton = (
    <Button onClick={handleClick}>Create new order</Button>
  );

  if (error) {
    return (
      <div>
        <AlertBanner message={null} variant={null} />
        {newOrderButton}
      </div>
    );
  }

  if (orderNumber) {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Thank You!</h1>
        <p>Your order number is {orderNumber}</p>
        <p style={{ foontSize: "25%" }}>
          as per our terms and conditions, nothing will happen now
        </p>
        {newOrderButton}
      </div>
    );
  } else {
    return <div>Loading</div>;
  }
};
