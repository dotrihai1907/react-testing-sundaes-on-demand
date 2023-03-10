import { useState } from "react";
import { Form, Button, Popover, OverlayTrigger } from "react-bootstrap";

export const SummaryForm = ({ setOrderPhase }) => {
  const [isChecked, setIsChecked] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>No ice cream will actually be delivered</Popover.Body>
    </Popover>
  );

  const checkboxLabel = (
    <span>
      I agree to
      <OverlayTrigger placement="right" overlay={popover}>
        <span style={{ color: "blue" }}> Terms and Conditions</span>
      </OverlayTrigger>
    </span>
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setOrderPhase("completed");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="terms-and-conditions">
        <Form.Check
          type="checkbox"
          label={checkboxLabel}
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!isChecked}>
        Confirm order
      </Button>
    </Form>
  );
};
