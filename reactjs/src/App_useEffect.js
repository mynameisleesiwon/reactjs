import "./App.css";
import Info from "./Info";
import { useState } from "react";

const App_useEffect = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <Info></Info>}
    </div>
  );
};

export default App_useEffect;
