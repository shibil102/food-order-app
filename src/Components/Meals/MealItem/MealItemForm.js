import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const inputRef = useRef();

  const [isValidInput, setIsValidInput] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredQuantity = inputRef.current.value;
    const enteredQuantityNumber = +enteredQuantity;

    if (
      enteredQuantity.trim().length === 0 ||
      enteredQuantityNumber < 1 ||
      enteredQuantityNumber > 5
    ) {
      setIsValidInput(false);
      return;
    }

    console.log(enteredQuantityNumber);
    props.onAddToCart(enteredQuantityNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Quantity"
        ref={inputRef}
        input={{
          id: "inputQuantity" + props.id,
          type: "number",
          max: "5",
          min: "1",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ ADD</button>
      {!isValidInput && <small>quantity must be (1-5).</small>}
    </form>
  );
};
export default MealItemForm;
