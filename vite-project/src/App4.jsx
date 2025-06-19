import { useState } from "react";

function App4(){
    const [todos, setTodos] = useState([{
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
            <AddTodo todos={todos} setTodos={setTodos}/>
            {todos.map(function(todo){
                return(
                    <Todo title={todo.title} description={todo.description}/>
                )
            })}
        </div>
    )
}

function Todo({title, description}){
    return(
        <>
            <div>{title}</div>
            <div>{description}</div>
            <br></br>
        </>
    )
}

function AddTodo({todos, setTodos}){
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    function addTodo(){
        setTodos([...todos, {
            title: title,
            description: description,
            completed: false
        }])
        
        // Clear input fields after adding
        setTitle("")
        setDescription("")
    }

    return(
        <div>
            <input type="text" placeholder="title"
                value={title}
                onChange={(e)=>{
                setTitle(e.target.value)
            }}
            />
            <input type="text" placeholder="description"
                value={description}
                onChange={(e)=>{
                setDescription(e.target.value)
            }}
            />
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}

export default App4