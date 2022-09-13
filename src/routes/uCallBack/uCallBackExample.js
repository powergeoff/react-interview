//https://dmitripavlutin.com/dont-overuse-react-usecallback/
//Profiling: https://developer.chrome.com/docs/devtools/evaluate-performance/

const UCallBackExample = () => {
  return (<>
    <h1>No, YOU Callback</h1>
    <p>Always <a href="https://developer.chrome.com/docs/devtools/evaluate-performance/" target="_blank" rel="noreferrer">profile</a> before optimization. </p>
    <p>Then quantify the increased performance (e.g. 150ms vs 50ms render speed increase)</p>
  </>);
}

export default UCallBackExample;