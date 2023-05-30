import "./App.css";
import { useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

function App() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };
  const handleDecreaseBy10 = () => {
    setCount(count - 10);
  };
  const handleIncreaseBy10 = () => {
    setCount(count + 10);
  };

  return (
    <div className="main">
      <div className="wraper">
        <ArrowLeftIcon
          onClick={handleDecreaseBy10}
          style={{ fontSize: "80px" }}
        />
        <div className="Up-Down">
          <ArrowDropUpIcon
            onClick={handleIncrease}
            style={{ fontSize: "80px" }}
          />
          <h1>{count}</h1>
          <ArrowDropDownIcon
            onClick={handleDecrease}
            style={{ fontSize: "80px" }}
          />
        </div>
        <ArrowRightIcon
          onClick={handleIncreaseBy10}
          style={{ fontSize: "80px" }}
        />
      </div>
    </div>
  );
}

export default App;
