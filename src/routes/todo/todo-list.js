import { useState, useEffect } from "react";
import { getTodos, deleteTodo } from "./todo-api";
import { useNavigate } from "react-router-dom";

const ToDoList = () => {
  let navigate = useNavigate();
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTodos();
      response.map(todo => setTodos(oldArray => [...oldArray, todo]))
    }
    fetchData();
  }, [setTodos]);

  const handleEditClick = (id) => {
    navigate('/todos/edit/' + id);
  }

  const handleDelete = (id) => {
    console.log(id)
    try {
      deleteTodo(id);
      setTodos(todos => todos.filter(item => item._id !== id));
    }
    catch(err){
      console.dir(err);
    }
  }


  const makeList = item => <li key={item._id}>{item.title}<button onClick={() => handleEditClick(item._id)}>Edit</button><button onClick={() => handleDelete(item._id)}>Delete</button></li>
  const todoList = todos.length === 0 ? <>Loadin'....</> : todos.map(makeList);

  return (<>
      <h1>Tada - Todos <button onClick={() => navigate('/todos/create')}>Create New</button></h1>
      {todoList}
  </>)
}

export default ToDoList;