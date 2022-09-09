import { useReducer, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//NO BUSINESS LOGIC IN COMPONENT
//TRANSLATIONS WLL HAVE SOME DEPENDENCY NO MATTER WHAT - have them rely on Model ID instead feature name
//NEED Router or Stack mechanism for back()
//seperate JSON file for RTW for each lang

//dependencies: 
    //model id drives componenet view 
    //events (ACTIONS) RELY ON model id
    //translations rely on model id


//business logic model layer
const models = [
    {
        name: 'First Model',
        id: 0,
        forward: true,
        selections: [{text: 'true'},{text: 'false'}]
    },
    {
        name: 'Second Model',
        id: 1,
        description: 'The second model is the best',
        forward: true,
        back: true
    },
    {
        name: 'Third Model',
        id: 2,
        description: 'Third Model aint bad either',
        back: true,
        forward: true
    }
];


const initialState = {
    model: models[0],
    path: [],
    returnHome: false
};


const reducer = (state, action) => {
    let array;
    let newModel;
    switch (action.type) {
        case "FORWARD" : 
            array = [...state.path];
            array.push(action.id);
            if (action.id === 0) {
                newModel = models[1];
                return { ...state,
                    model: newModel,
                    path: array 
                }
            }
            else if (action.id === 2) {
                return { ...state,
                    returnHome: true
                }
            }
            else {
                newModel = models[2];
                return { ...state,
                    model: newModel,
                    path: array 
                }
            }
        case "BACK" : 
            array = [...state.path];
            const previous = array.pop();
            newModel = models[previous];
            return { ...state,
                model: newModel,
                path: array
            }
        default: 
            return state;
    }
}


const ViewModel = () => {
    let navigate = useNavigate();
    const [state, dspatch] = useReducer(reducer, initialState);
    
    //useEffect to watch state.returnHome
    //To solve this problem I had to wrap this code in useEffect, 
    //to only run it when the data changed and not on every component props update:
    useEffect(() => {
        if (state.returnHome) {
            navigate('/invoices');
        }
    },[state.returnHome, navigate]);
    
    
    const handleForward = () => {
        dspatch({type: "FORWARD", id: state.model.id});
    }

    const handleBack = () => {
        dspatch({type: "BACK", id: state.model.id});
    }

    const forwardButton = state.model.forward ? <button onClick={handleForward}>Forward</button> : '';
    const backButton = state.model.back ? <button onClick={handleBack}>Back</button> : '';
    const description = state.model.description ? <div>{state.model.description}</div> : '';
    const selections = state.model.selections ? state.model.selections.map( (s, index) => <span key={index}>{s.text} {' '}</span>) : '';

    return <>
            <h1>View Model</h1>
            <div>
                <h2>{state.model.name}</h2>
            </div>
            {description}
            <div>{selections}</div>
            <div>

                {backButton} | {forwardButton}
            </div>
        </>
}

export default ViewModel;