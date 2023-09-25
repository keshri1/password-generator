import React from "react";
const PasswordStrengthIndicator = ({ password }) => {
  const getPasswordStrength = () => {
    const passwordLength = password.length;

    if (passwordLength < 1) {
      return "";
    } else if (passwordLength < 4) {
      return "Very Weak";
    } else if (passwordLength < 8) {
      return "Poor";
    } else if (passwordLength < 12) {
      return "Medium";
    } else if (passwordLength < 16) {
      return "Strong";
    } else return "Very Strong";
  };
  const strength = getPasswordStrength();
  if (!strength) return <React.Fragment />;

  return (
    <div className="Strength">
      <span>Strength: {strength}</span>
    </div>
  );
};
export default PasswordStrengthIndicator;
