import { Col, Form } from "react-bootstrap";
import { useOrderDetails } from "../../contexts/OrderDetails";

export const ToppingOption = ({ name, imagePath }) => {
  const { updateItemCount } = useOrderDetails();

  const handleChange = (e) => {
    updateItemCount(name, e.target.checked ? 1 : 0, "toppings");
  };

  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        src={`http://localhost:3030/${imagePath}`}
        alt={`${name} topping`}
        style={{ width: "75%" }}
      />
      <Form.Group controlId={`${name}-checkbox`}>
        <Form.Check type="checkbox" onChange={handleChange} label={name} />
      </Form.Group>
    </Col>
  );
};
