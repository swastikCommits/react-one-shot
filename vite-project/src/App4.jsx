import { useState } from "react";

function App4(){
    // harcoded database
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
        // a button to add a new todo by giving props of todos, setTodos
        // a list of todos
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
    // returns the list of todo however I want to see them
    return(
        <>
            <div>{title}</div>
            <div>{description}</div>
            <br></br>
        </>
    )
}



function AddTodo({todos, setTodos}){
    // adds a newTodo by taking the props of todos, setTodos
    // declared states for title and description
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    function addTodo(){
        // adds a newTodo by taking the props of todos, setTodos
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
        // takes the input of title and description and changes it using onChange
        // value={title} is used to clear the input box, and take a new todo input
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