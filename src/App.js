import { useState } from "react";
import Updating from "./Updating";

export default function App() {
  const [fnameForComponent, setFnameForComponent] = useState("shay");
  return (
    <>
      <button onClick={() => setFnameForComponent("itzik")}>
        Click for update
      </button>
      <Updating fname={fnameForComponent} />
    </>
  );
}
