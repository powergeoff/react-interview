import { SearchContext } from "../../state/searchSlice/store";
import { useContext } from "react";


const SearchPage = () => {
  const [state, dispatch] = useContext(SearchContext);
  return (
    <>
      <h1>Search Results</h1>
      <div>
        <div>{`There were ${state.results.length} hits for term: "${state.term}"`}</div>
      </div>
      <div className="search-results">
      {
        state.results.map((post) => (
          <div className="box" key={post.id}>
            <p>{post.title}</p>
            <p>{post.author}</p>
          </div>
        ))
      }
      </div>
      

      <button onClick={() => dispatch({ type: 'CLEAR'})}>Clear Results</button>
    </>
  )
}

export default SearchPage;