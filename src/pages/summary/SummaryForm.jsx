import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const checkboxLabel = (
  <span>
    I agree to <span style={{ color: "blue" }}> Terms and Conditions</span>
  </span>
);

export const SummaryForm = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Form>
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
