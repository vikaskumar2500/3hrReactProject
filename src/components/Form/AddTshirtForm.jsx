import Input from "../UI/Input";
import "./AddTshirtForm.css";
import MyContext from "../../store/MyContext";
import { useContext, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

const AddTshirtForm = (props) => {
  const myCtx = useContext(MyContext);

  const enteredTshirtNameRef = useRef();
  const enteredDescriptionRef = useRef();
  const enteredPriceRef = useRef();
  const enteredSmallRef = useRef();
  const enteredMediumRef = useRef();
  const enteredLargeRef = useRef();

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const object = {
      id: uuidv4(),
      name: enteredTshirtNameRef.current.value,
      desc: enteredDescriptionRef.current.value,
      price: Number(enteredPriceRef.current.value),
      small: Number(enteredSmallRef.current.value),
      medium: Number(enteredMediumRef.current.value),
      large: Number(enteredLargeRef.current.value),
    };
    console.log(object)
    myCtx.addTshirtItem(object);

    enteredTshirtNameRef.current.value = "";
    enteredDescriptionRef.current.value = "";
    enteredPriceRef.current.value = "";
    enteredSmallRef.current.value = "0";
    enteredMediumRef.current.value = "0";
    enteredLargeRef.current.value = "0";
  };

  return (
    <form action="#" className="form" onSubmit={formSubmitHandler}>
      <div className="form-about">
        <Input
          type="text"
          label="TshirtName"
          name="tshirt-name"
          ref={enteredTshirtNameRef}
        />
        <Input
          type="text"
          label="Description"
          name="description"
          ref={enteredDescriptionRef}
        />
        <Input
          type="number"
          label="Price"
          name="price"
          min={0.01}
          step={0.01}
          ref={enteredPriceRef}
        />
      </div>
      <div className="quantity-available">
        <div>Quantity Available</div>
        <Input
          type="number"
          label="S"
          name="s"
          min={0}
          step={1}
          defaultValue={0}
          ref={enteredSmallRef}
        />
        <Input
          type="number"
          label="M"
          name="m"
          min={0}
          step={1}
          defaultValue={0}
          ref={enteredMediumRef}
        />
        <Input
          type="number"
          label="L"
          name="l"
          min={0}
          step={1}
          defaultValue={0}
          ref={enteredLargeRef}
        />
      </div>

      <button type="submit">Add Product</button>
    </form>
  );
};

export default AddTshirtForm;
