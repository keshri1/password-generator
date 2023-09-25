import { useState } from "react";
import Slider from "@mui/material/Slider";

export default function CharacterLength({ length, setLength }) {
  // const [value, setValue] = useState(length);
  const handleChange = (event) => {
    console.log("ewf", event);
  };
  return (
    <>
      <div className="CharacterLength">
        <div className="Character">Character Length</div>
        <div className="DisplayLength">{length}</div>
      </div>
      {/* <Slider
        defaultValue={length}
        valueLabelDisplay="auto"
        onChange={handleChange}
      /> */}
      <input
        type="range"
        min="4"
        max="20"
        value={length}
        onChange={(e) => setLength(e.target.value)}
      />
    </>
  );
}
