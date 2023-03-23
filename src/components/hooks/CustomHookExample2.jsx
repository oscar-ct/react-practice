// import React, {useState} from 'react';
import useLocalStorage from "./useLocalStorage";

const CustomHookExample2 = () => {

    const [task, setTask] = useLocalStorage("task", "");
    const [tasks, setTasks] = useLocalStorage("tasks", []);

    const onSubmit = (e) => {
        e.preventDefault();
        const taskObj = {
            task: task,
            completed: false,
            date: new Date().toLocaleDateString()
        }
        setTasks([...tasks, taskObj])
    }

    console.log(tasks)
    console.log(task)


    return (
        <>
        <form onSubmit={onSubmit}>
            <label>Task</label> <br/>
            <input type={"text"} onChange={(e) => {
                setTask(e.target.value)
            }} value={task}/>
            <br/>
            <button type={"submit"}>Submit</button>
        </form>
            <div>
                {tasks.length !== 0 && tasks.map(function (task) {
                    return <h3 style={{color: "black"}} key={task.date}>{task.task}</h3>
                })}
            </div>
        </>
    );
};

export default CustomHookExample2;