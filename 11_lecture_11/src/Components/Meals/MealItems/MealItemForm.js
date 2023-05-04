import React, { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const [amountIsValidate, setAmountIsValidate] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();
    const enterAmount = amountInputRef.current.value;
    const enterAmountNum = parseInt(enterAmount);

    if (
      enterAmount.trim().length === 0 ||
      enterAmountNum <= 0 ||
      enterAmountNum > 5
    ) {
      setAmountIsValidate(false);
      return false;
    }
    props.onAddToCart(enterAmountNum);
    setAmountIsValidate(true);
  };

  return (
    <>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount_" + props.id, // this changed!
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ Add</button>
        {!amountIsValidate && <p>Amount is not validate range(1 to 5)</p>}
      </form>
    </>
  );
};

export default MealItemForm;
