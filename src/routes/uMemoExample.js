import {useState, useMemo} from "react";


const UMemoExample = () => {
  const [number, setNumber] = useState(1);
  const [, setInc] = useState(0);
  const factorial = useMemo(() => factorialOf(number), [number]);
  const onChange = event => {
    setNumber(Number(event.target.value));
  };
  const onClick = () => setInc(i => i + 1);
  
  return (
    <div>
      <h1>Use Memo</h1>
      <p>The factorial method is expensive. However, when wrapped in a useMemo()) call, the result is cached/ stored/ mmemoized WHATEVER
         and clicking rerender will not invoke it</p>
      Factorial of 
      <input type="number" value={number} onChange={onChange} />
      is {factorial}
      <button onClick={onClick}>Re-render</button>
    </div>
  );
}
function factorialOf(n) {
  console.log('factorialOf(n) called!');
  return n <= 0 ? 1 : n * factorialOf(n - 1);
}
  
export default UMemoExample;