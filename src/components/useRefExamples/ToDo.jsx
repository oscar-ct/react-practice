import {useEffect, useRef, useState} from "react";


const ToDo = () => {

    const [loading, setLoading] = useState(true);
    const [todo, setTodo] = useState({})

    ////  Memory leak fix error
    const isMounted = useRef(true)

    useEffect(function () {
       fetch("https://jsonplaceholder.typicode.com/todos/1").then(function (res){
           return res.json().then(function (data) {
               setTimeout(function () {
                   if (isMounted) {
                       setTodo(data)
                       setLoading(false)
                   }
               }, 3000)
           });
       });
       /// this runs when component is unmounted
       return () => {
           isMounted.current = false;
       }
    }, [isMounted]);



    return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>
};

export default ToDo;