import './App.css';
import React,{useState} from 'react';

function App() {
  const[count, setCount] = useState(0);
  const Add = () =>
  {
    setCount(count=> count+ 1);
  };

  const Sub = () =>
  {
    setCount(count=> count - 1);
  };

  return (
    <div className='container'>
      <input type='text' size='1' value={count}></input>
      <button onClick={Sub} className='Sub'>-</button>
      <button onClick={Add} className='Add'>+</button>
    </div>
  );
}

export default App;
