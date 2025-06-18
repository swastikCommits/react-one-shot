import { useState } from 'react'
import './App.css'

function App3() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

function CustomButton({count, setCount}){   
    function onClickHandler(){
        setCount(count+1);
    }
    return(
        <div>
            <button onClick={onClickHandler}>Counter is {count}</button>
        </div>
    )
}

export default App3
