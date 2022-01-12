
import './index.css';
import React, {useState} from 'react';


function App() {

  const [count, setCount] = useState(0)
  const [them, setTheme] = useState('blue')

  function decrementCount() {
    setCount((previousCount) => previousCount - 1)
  }

  function incrementCount() {
    setCount((previousCount) => previousCount + 1)
    setTheme('red')
  }

  return (
    <>
      <div className='container'>
        <button onClick={decrementCount}> - </button>
          <span>{count}</span>
          <span>{them}</span>
        <button onClick={incrementCount}> + </button>
      </div>
    </>
  );
}

export default App;
