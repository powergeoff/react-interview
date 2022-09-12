import React from "react";
import './App.css'

import SearchStore from "./state/searchSlice/store";
import SimpleStore from './state/simpleSlice/store';
import Navigation from "./Navigation";

export default function App() {
  return (
    <SimpleStore>
      <SearchStore>
        <Navigation />
      </SearchStore>
    </SimpleStore>
  );
}