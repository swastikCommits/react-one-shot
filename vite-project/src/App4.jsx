import { useState } from "react";

function App4(){
    const [todos] = useState([{
        title: "bla bla",
        description: "do bla bla",
        completed: false
    },{
        title: "la la",
        description: "do la la",
        completed: true
    }])

    return(
        <div>
            {todos.map(function(todo){
                return <Todo title={todo.title} description={todo.description}/>
            })}
        </div>
    )
}

function Todo(props){
    return(
        <>
            <div>{props.title}</div>
            <div>{props.description}</div>
            <br></br>
        </>
    )
}

export default App4