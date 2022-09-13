import { useParams, useNavigate } from "react-router-dom";
import {useState, useEffect} from "react";
import { createTodo, getTodo, updateTodo } from "./todo-api";

const TodoCreateAndEdit = () => {
    let navigate = useNavigate();
    let params = useParams();
    let id = params.todoId;

    const [todo, setTodo] = useState({title: '', description: ''});

    useEffect(() => {
        const fetchData = async () => {
          const response = await getTodo(id);
          setTodo(response);
        }
        if (id) fetchData();
      }, [id, setTodo]);

    const handleSubmit = () => {
        const updateData = async () => {
            await updateTodo(todo);
            //await keyword will block within async function
            navigate('/todos');
        }
        const createData = async () => {
            await createTodo(todo);
            navigate('/todos');
        }
        if (id) {
            updateData();
        }
        else {
            createData();
        }
    }
    //currying
    const handleChange = (myItem) => (e) => {
        console.log(myItem)
        const target = e.target;
        const value = target.value;
        const name = target.name;

        setTodo({
            ...todo,
            [name]: value
        });
    }

    return (<>
        <h1>Edit Todo</h1>
        <div>
            <label>Title:</label>
            <input name='title' onChange={(e) => handleChange('string')(e)} value={todo.title} />
        </div>
        
        <div>
            <label>Description:</label>
            <input name='description' onChange={e => handleChange(e)} value={todo.description} />
        </div>
        <button onClick={handleSubmit}>Sunbitches</button>
    </>);
 }

 export default TodoCreateAndEdit;