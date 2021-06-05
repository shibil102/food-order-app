import { useContext } from "react";
import classes from "./MealItem.module.css";
import Form from "./MealItemForm";
import CartContext from "../../../Store/cart-context";

const MealItem = (props) => {
  const price = `₹${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const onAddToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <Form id={props.id} onAddToCart={onAddToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
