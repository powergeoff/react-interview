import React from "react";

import SimpleStore from './state/simpleSlice/store';
import Navigation from "./Navigation";

export default function App() {
  return (
    <SimpleStore>
      <Navigation />
    </SimpleStore>
  );
}