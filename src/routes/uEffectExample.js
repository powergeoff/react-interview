import { useEffect, useState } from "react";

/*
A functional React component uses props and/or state to calculate the output. 
If the functional component makes calculations that don't target the output value, then these calculations are named side-effects.

Examples of side-effects are fetch requests, manipulating DOM directly, using timer functions like setTimeout(), and more.

The component rendering and side-effect logic are independent. It would be a mistake to perform side-effects directly in the body of the component, which is primarily used to compute the output.

How often the component renders isn't something you can control — if React wants to render the component, you cannot stop it.
*/


const rules = ['useEffect() is for side-effects', 'dependecies are optional, if not included it runs on every rendering', '[] empty array goes on init',
'[prop1,prop2,stateVal, component val....] fires when the dependency changes', 'You can have as many as needed in the component to handle needs',
'if the callback returns a function, then useEffect() considers this an effect cleanup'];

const cleanupRules = ['A) After initial rendering, useEffect() invokes the callback having the side-effect. cleanup function is not invoked.',
'B) On later renderings, before invoking the next side-effect callback, useEffect() invokes the cleanup function from the previous side-effect execution (to clean up everything after the previous side-effect), then runs the current side-effect.',
'C) Finally, after unmounting the component, useEffect() invokes the cleanup function from the latest side-effect.'
];

const UEffectExample = ({ title }) => {

    useEffect(() => {
        //DOM manipulation - fire on initial render [] or {props val}
        //there is nuance in this case. - title never changes 
        document.title = `${title} useEffect Hook`
    }, [title]);

    const [value, setValue] = useState('');
    const [count, setCount] = useState(-1);

    const onChange = ({ target }) => {
        setCount(count + 1)
        setValue(target.value);
    }

    return (
        <div>
            <h1>useEffect Hook</h1>
            <div><a href='https://dmitripavlutin.com/react-useeffect-explanation/' target='_blank' rel='noreferrer'>Great Read</a></div>
            <ul>
                {rules.map((r, index) => <li key={index}>{r}</li>)}
            </ul>
            <hr />
            <h1>Clean Up</h1>
            <ul>
                {cleanupRules.map((r, index) => <li key={index}>{r}</li>)}
            </ul>
            <hr/>
            <h1>Counter On Change</h1>
            <div>
                <input type="text" value={value} onChange={onChange} />
                <div>Number of changes: {count}</div>
            </div>
        </div>
    );
}

export default UEffectExample;