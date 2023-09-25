import { useState } from "react";
import CharacterLength from "./components/CharacterLength";
import PasswordCombinations from "./components/PasswordCombinations";
import PasswordDisplay from "./components/PasswordDisplay";
import "./styles.css";
import usePasswordGenerator from "./Hooks/usePasswordGenerator";
import PasswordStrengthIndicator from "./components/StrengthChecker";

export default function App() {
  // let [password, setPassword] = useState("BwsFbQ2");
  const [length, setLength] = useState(8);
  const [checkBoxData, setCheckBoxData] = useState([
    { title: "Include Upper case letters", state: false },
    { title: "Include Lower case letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false }
  ]);
  // let str =
  //   "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";
  // let char = "";
  // const generatePassword = () => {
  //   console.log({ password });
  //   if (password !== "") {
  //     setPassword("");
  //     return;
  //   }
  //   for (let i = 1; i < length; i++) {
  //     char = Math.floor(Math.random() * str.length + 1);
  //     password += str.charAt(char);
  //   }
  //   setPassword(password);
  //   return password;
  // };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();
  return (
    <div className="App">
      <h1>Generate your password</h1>
      <div id="container">
        {password && <PasswordDisplay password={password} />}
        <CharacterLength length={length} setLength={setLength} />
        <PasswordCombinations
          checkBoxData={checkBoxData}
          setCheckBoxData={setCheckBoxData}
        />
        <PasswordStrengthIndicator password={password} />
        {errorMessage && <div className="errorMsg">{errorMessage}</div>}
        <button
          className="GeneratePassword"
          onClick={() => generatePassword(checkBoxData, length)}
        >
          GENERATE PASSWORD
        </button>
        {/* {password} */}
      </div>
    </div>
  );
}
