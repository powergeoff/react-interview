import { useContext, useState } from "react";
import { SearchContext } from "../../state/searchSlice/store";
import { useNavigate } from "react-router-dom";



const SearchInput = () => {
  let navigate = useNavigate();
  const [, dispatch] = useContext(SearchContext);
  const [term, setTerm] = useState('');

  const handleClick = () => {
    dispatch({ type: 'SEARCH', payload: { term: term } });
    navigate('/search')
  }

  return (
    <>
      <input onChange={(e) => setTerm(e.target.value)} placeholder='Enter Post Title' />
      <button onClick={handleClick}>Search</button> 
    </>
  )
}

export default SearchInput;