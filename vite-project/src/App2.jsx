import { useState } from 'react'
import './App.css'

function App2() {
  const [count, setCount] = useState(0);

  function onClickHandler(){
    setCount(count+1);
  }

  return (
    <div>
      <button onClick={onClickHandler}>
          Count is {count}
      </button>

    
    </div>
  )
}

export default App2
