import Data from '../../routes/search/data.json'

const filter = (term) => {
  let array = [];
  Data.filter(post => {
    if (term === '') {
      return array.push(post);
    } else if (post.title.toLowerCase().includes(term.toLowerCase())) {
      return array.push(post);
    }
    else {
      return '';
    }
  })
  console.log(array);
  return array;
}

const SearchReducer = (state, action) => {
  let array;
  switch (action.type) {
      case 'SEARCH':
        array = filter(action.payload.term);
        return {...state,
          term: action.payload.term,
          results: array
        }
      case 'CLEAR':
        return {...state,
          term: '',
          results: []
        }

      default:
          return state
  }
}
export default SearchReducer;

//update arrays 
//get a NEW copy of the state array
//add item to that
//spread the state and update the array element with the NEW array
/*
array = [...state.path];
            array.push(action.id);
            if (action.id === 0) {
                newModel = models[1];
                return { ...state,
                    model: newModel,
                    path: array 
                }
*/