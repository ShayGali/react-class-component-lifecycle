import React, { useState } from "react";
import Unmounting from "./Unmounting";

export default function App() {
  const [show, setShow] = useState(true);
  return (
    <>
      <button onClick={() => setShow(true)} disabled={show}>
        show
      </button>
      <button onClick={() => setShow(false)} disabled={!show}>
        Hide
      </button>
      {show && <Unmounting></Unmounting>}
    </>
  );
}
