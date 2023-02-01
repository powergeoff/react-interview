import React from "react"
import { Outlet, Link } from "react-router-dom";

import { Context } from "./state/simpleSlice/store";
import SearchInput from "./routes/search/search-input";

const Navigation = () => {
    const [state, ] = React.useContext(Context)
    return (
        <div>
        <nav><Link to="/"><h1>Home - {state.active.toString()}</h1></Link></nav>
        <nav
          style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
          }}
        >
          <Link to="/radio">Radio Button</Link> |{" "}
          <Link to="/invoices">Invoices</Link> |{" "}
          <Link to="/expenses">Expenses</Link> |{" "}
          <Link to="/todos">To Do List</Link> |{" "}
          <Link to="/debounce">Debounce</Link> |{" "}
          <Link to="/uref">useRef Hook</Link> |{" "}
          <Link to="/ueffect">useEffect Hook</Link> |{" "}
          <Link to="/umemo">useMemo Hook</Link> |{" "}
          <Link to="/ucallback">useCallback Hook</Link> |{" "}
          <Link to="/viewmodel">View Model</Link>


          <SearchInput />
        </nav>
        <Outlet />
      </div>
    )
}

export default Navigation;