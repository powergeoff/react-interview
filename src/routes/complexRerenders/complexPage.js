import { useContext } from "react";

import { ComplexContext } from "../../state/complexSlice/store";

import Login from "./login";

const ComplexPage = () => {
    const [state,] = useContext(ComplexContext);
    return (<>
        <div>Login From Complex Page: {state.login}</div>
        <Login />
        {state.validationStep === 1 && <Step1 />}
        {state.validationStep === 2 && <Step2 />}
    
    </>);
}

export default ComplexPage;

const Step1 = () => {
    const [,dispatch] = useContext(ComplexContext);

    const handleChange = () => {
        dispatch({ type: 'SETVALIDATIONSTEP', payload: { validationStep: 2 } });
    }

    return <><div>Hello From Step 1</div><button onClick={handleChange}>Move To Step 2</button></>
}

const Step2 = () => {
    const [,dispatch] = useContext(ComplexContext);

    const handleChange = () => {
        dispatch({ type: 'SETVALIDATIONSTEP', payload: { validationStep: 1 } });
    }

    return <><div>Hello From Step 2</div><button onClick={handleChange}>Move To Back Step 1</button></>
}


