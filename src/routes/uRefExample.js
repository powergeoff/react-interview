import { useRef, useState, useEffect } from 'react';

/*
rules
1. The value of the ref is persisted between component re-renderings
2. Updating the ref doesn't trigger a component re-render
*/
const rules = ['The value of the ref is persisted between component re-renderings','Updating the ref doesn\'t trigger a component re-render'];

const URefExample = () => {
    const countRef = useRef(0);
  
    const handle = () => {
        countRef.current++;
        console.log(`Clicked ${countRef.current} times`);
    };
    console.log('I rendered!');

    //stopwatch stuff
    const timerIdRef = useRef(0);
    const [count, setCount] = useState(0);

    const inputRef = useRef();
    //inputRef.current.focus(); trying this blows up!
    useEffect(() => {
        //use effect ensures reference dom element is created so we can focus
        //otherwise app dies!
        console.log('useEffect for input focus', inputRef.current)
        /*callback function of the useEffect(callback, []) 
        is the right place to access inputRef.current because it is guaranteed that the DOM is constructed.
        */
        inputRef.current.focus();
      }, []); 

    useEffect(() => {
        console.log('useEffect for timer')
        //i'm not seeing this as an issue
        return () => clearInterval(timerIdRef.current);
    }, []);

    const startHandler = () => {
        if (timerIdRef.current) { return; }
        timerIdRef.current = setInterval(() => setCount(c => c+1), 1000);
    };
    const stopHandler = () => {
        clearInterval(timerIdRef.current);
        timerIdRef.current = 0;
    };
    return (
    <div>
        <h1>useRef Hook</h1>
        <h3>Rules</h3>
        <div><a href='https://dmitripavlutin.com/react-useref-guide/' target='_blank' rel='noreferrer'>Great Read</a></div>
        <ul>
            {rules.map((rule, index) => <li key={index}>{rule}</li>)}
        </ul>
        <input type='text' ref={inputRef} />
        <div>console shows initial render only even on button click</div>
        <div><label>Counter: </label>{countRef.current}</div>
        <h3>Counter never updates because the component DOES NOT rerender</h3>
        <hr />
        <button onClick={handle}>Click me</button>
        <hr/>
        <div>
            <h1>Stop Watch</h1>
            <div>Timer: {count}s</div>
            <div>
                <button onClick={startHandler}>Start</button>
                <button onClick={stopHandler}>Stop</button>
            </div>
        </div>
    </div>
    )
    
} 

export default URefExample;