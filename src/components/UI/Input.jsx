import "./Input.css";
import { forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return (
    <div className="input">
      <label htmlFor={props.name}>{props.label}</label>
      <input
        ref={ref}
        type={props.type}
        name={props.name}
        id={props.name}
        min={props.min}
        max={props.max}
        step={props.step}
        defaultValue={props.defaultValue}
      />
    </div>
  );
});

export default Input;
