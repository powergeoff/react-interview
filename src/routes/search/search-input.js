import { useContext, useState } from "react";
import { SearchContext } from "../../state/searchSlice/store";

const SearchInput = () => {
  const [, dispatch] = useContext(SearchContext);
  const [term, setTerm] = useState('');

  return (
    <>
      <input onChange={(e) => setTerm(e.target.value)} placeholder='Enter Post Title' />
      <button onClick={() => dispatch({ type: 'SEARCH', payload: { term: term } })}>Search</button> 
    </>
  )
}

export default SearchInput;