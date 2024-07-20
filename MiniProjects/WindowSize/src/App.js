// import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [size, setSize] = useState(window.screen.width);

  useEffect(() => {
    console.log("Added.");
    window.addEventListener("resize", () => {
      setSize(window.innerWidth);
    });
    return () => {
      console.log("Removed.");
      window.removeEventListener("resize", () => {
        setSize(window.innerWidth);
      });
    };
  }, [size]);

  return (
    <div>
      <h2>Size of Window is: {size}</h2>
    </div>
  );
}

export default App;
