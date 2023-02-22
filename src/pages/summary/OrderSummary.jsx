import { SummaryForm } from "./SummaryForm";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { formatCurrency } from "../../utilities";

export const OrderSummary = () => {
  const { totals, optionCounts } = useOrderDetails();

  const scoopsArray = Object.entries(optionCounts.scoops); // [["chocolate", 2], ["vanilla", 1]]
  const scoopList = scoopsArray?.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));

  const toppingArray = Object.keys(optionCounts.toppings); // ["M&Ms", "Gummi bears"]
  const toppingList = toppingArray?.map((key) => <li key={key}>{key}</li>);

  return (
    <div>
      <h1>Order Summary</h1>
      <h2>Scoops: {formatCurrency(totals.scoops)}</h2>
      <h2>Toppings: {formatCurrency(totals.toppings)}</h2>
      <ul>{scoopList}</ul>
      <ul>{toppingList}</ul>
      <SummaryForm />
    </div>
  );
};
