import { getTodos } from "../todo/todo-api";
import { useState } from "react";

const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

const DebounceForm = () => {
  const [todos, setTodos ] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleClick = async () => {
    setTodos([]);
    setLoading(true);
    try {
      const response = await getTodos();
      response.map(todo => setTodos(oldArray => [...oldArray, todo]))
    }
    catch (err) {
      console.log(err.message)
      setError(err.message);
    }
    finally {
      setLoading(false);
      setError('')
    }

  }

  const viewTodos = todos.length === 0 ? '' : todos.map((t, index) => <li key={index}>{t.title}</li>);

  return (
    <>
      <h1>Debounce YOU!</h1>
      {loading ? 'Loader Up' : ''}
      {error}
      <ul>
        {viewTodos}
      </ul>
      <button onClick={handleClick}>Fetch Data</button>

      <button onClick={debounce(() => setTodos([]))}>Clear Data</button>
    </>
  );
}

export default DebounceForm;