import React from "react"
import { Context } from "../state/simpleSlice/store";

export default function Expenses() {
  const [state, dispatch] = React.useContext(Context)
    return (
      <main style={{ padding: "1rem 0" }}>
        <h2>Expenses</h2>
        <button onClick={() => dispatch({ type: "toggle" })}>
          { state.active ? "true" : "false" }  
        </button>
      </main>
    );
  }