import React, {useCallback, useState} from 'react';


const UseCallbackExample = () => {

    const [tasks, setTasks] = useState([]);


    const addTask = useCallback( () => {
        setTasks(prevState => {
            return [...prevState, "Some Task"]
        })
    }, [setTasks])

    // const addTask = () => {
    //     setTasks(prevState => {
    //         return [...prevState, "Some Task"]
    //     })
    // }

    return (
        <div>
            <NewButton addTask={addTask}/>
            {tasks.map(function (task, i) {
                return <p key={i}>{task}</p>
            })}
        </div>
    );
};

const NewButton = React.memo(({addTask}) => {
    console.log("Button Rendered")
    return <div>
        <button onClick={addTask}>Add Task</button>
    </div>
})

export default UseCallbackExample;