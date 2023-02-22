import axios from "axios";
import { useEffect, useState } from "react";
import { ScoopOption } from "./ScoopOption";
import { Row } from "react-bootstrap";

export const Options = ({ optionType }) => {
  const [items, setItems] = useState([]);

  // optionsType is 'scoops' or 'toppings'
  useEffect(() => {
    axios
      .get(`http://localhost:${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        // handle error response
      });
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? <ScoopOption /> : null;

  return (
    <div>
      {items?.map((item) => (
        <ItemComponent
          key={item.name}
          name={item.name}
          imagePath={item.imagePath}
        />
      ))}
    </div>
  );
};