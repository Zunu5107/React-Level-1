import React from "react";
import "../css/inputField.css";

export default function InputField({ fieidName, fieldValue, setFieldFunc }) {
  const changeFunc = (event) => {
    setFieldFunc(event.target.value);
  };
  return (
    <>
      <label className="form-label">{fieidName}</label>
      <input
        className="add-input input-body"
        onChange={changeFunc}
        value={fieldValue}
      />
    </>
  );
}
