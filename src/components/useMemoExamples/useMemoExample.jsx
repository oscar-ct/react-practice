import React, {useEffect, useMemo, useRef, useState} from 'react';

const UseMemoExample = () => {

    const [number, setNumber] = useState(1);
    const [inc, setInc] = useState(0);

    // const sqrt = getSqrt(number);

    const sqrt = useMemo(() => {
        return getSqrt(number)
    }, [number]);

    const renders = useRef(1)

    useEffect(function() {
        renders.current = renders.current + 1
    })

    const onClick = () => {
      setInc((prevState => {
          console.log(prevState + 1)
          return prevState + 1
      }))
    }
    return (
        <div>
            <input type="number" value={number} onChange={(e) => {
                setNumber(e.target.value)
            }}/>
            <h2>The square root of {number} is {sqrt}</h2>
            <button onClick={()=>onClick()}>Re-render</button>
            <h1>Renders: {renders.current}</h1>
        </div>
    );
};


function getSqrt(n) {
    for (let i = 0; i <= 50000; i++) {
        console.log(i)
    }
    console.log("Expensive function called")
    return Math.sqrt(n)
}

export default UseMemoExample;