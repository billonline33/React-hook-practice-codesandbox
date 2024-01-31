import { useState } from "react";
import "./styles.css";
import useLocalStorageHook from "./useLocalStorage";

export default function App() {
  const [name, setName] = useLocalStorageHook("name",null);
  const onChangeVal1 = (e: any) => {
    setName(e.target.value);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        id="text1"
        size={10}
        value={name}
        onChange={(e) => onChangeVal1(e)}
      />
      <div> your input is: {name}</div>
    </div>
  );
}
