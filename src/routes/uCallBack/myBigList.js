//import { getTodos } from "../todo/todo-api";

import React from "react";

function MyBigList({ term, onItemClick }) {
    const items = []//useSearch(term);
    const map = item => <div onClick={onItemClick}>{item}</div>;
    return <div>{items.map(map)}</div>;
  }
  export default React.memo(MyBigList);