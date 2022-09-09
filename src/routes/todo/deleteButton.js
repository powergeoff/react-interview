import { deleteToDo } from "./todo-api";

const DeleteButton = ({id}) => {
    console.log(id)

    return <button onClick={() => deleteToDo(id)}>Delete</button>
}

export default DeleteButton;