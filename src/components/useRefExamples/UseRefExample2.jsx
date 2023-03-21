
import { useState, useEffect, useRef } from "react"

const UseRefExample2 = () => {

    const [name, setName] = useState("")
    const renders = useRef(1)
    const previousRef = useRef("")

    useEffect(function() {
        renders.current = renders.current + 1;
        previousRef.current = name;
    }, [name])
    return (
        <div>
            Renders: {renders.current} <br/>
            Prev Name State: {previousRef.current} <br/>
            <input type="text" className="form-control mb-2" value={name} onChange={(e) => {
                setName(e.target.value)
            }}/>
        </div>
    );
};

export default UseRefExample2;