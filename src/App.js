import React from "react";

import Store from "./state/store";
import Navigation from "./Navigation";

export default function App() {
  return (
    <Store>
      <Navigation />
    </Store>
  );
}