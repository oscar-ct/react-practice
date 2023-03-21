import { useRef, useState } from 'react';
import ToDo from "./ToDo";

const UseRefExample3 = () => {

    const [showToDo, setShowToDo] = useState(true);

    return (
        <div style={{paddingTop: "10px"}}>
            {showToDo && <ToDo/>}
            <button onClick={() => {
                setShowToDo(!showToDo)
            }}>Toggle ToDo</button>
        </div>
    );
};

export default UseRefExample3;