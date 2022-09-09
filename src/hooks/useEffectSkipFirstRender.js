import { useEffect, useRef } from "react";

/*
Challenge: write a custom hook useEffectSkipFirstRender() that works as useEffect(),
 only that it doesn't invoke the callback after initial rendering (Hint: you need to use useRef()).
*/

const useEffectSkipFirstRender = () => {
    const counter = useRef(0);

    useEffect(() => {
    },[]);
}

export default useEffectSkipFirstRender;