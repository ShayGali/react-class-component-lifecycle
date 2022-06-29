import React, { useState } from "react";
import MountExample from "./Mounting";

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
      {show && <MountExample name="shay"></MountExample>}
    </>
  );
}
