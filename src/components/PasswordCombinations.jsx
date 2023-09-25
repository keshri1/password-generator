import { useState } from "react";

export default function PasswordCombinations({
  checkBoxData,
  setCheckBoxData
}) {
  const handleCheckBoxChange = (i) => {
    let updatedState = [...checkBoxData];
    updatedState[i].state = !updatedState[i].state;
    setCheckBoxData(updatedState);
  };
  return (
    <div className="PasswordCombinations">
      {checkBoxData.map((checkbox, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              checked={checkbox.state}
              onChange={() => handleCheckBoxChange(i)}
            />
            <label>{checkbox.title}</label>
          </div>
        );
      })}
    </div>
  );
}
