import { useContext, useState } from "react";

import { ComplexContext } from "../../state/complexSlice/store";

const Login = () => {
    const [state, dispatch] = useContext(ComplexContext);
    const [login, setLogin] = useState('');

    const handleClick = () => {
        dispatch({ type: 'SETLOGIN', payload: { login: login } });
    }

    return (
        <div>
            <div>
                Login: {state.login}
            </div>
            <input onChange={(e) => setLogin(e.target.value)} placeholder='Enter Login' />
            <button onClick={handleClick}>Search</button> 
        </div>
    )
}

export default Login;