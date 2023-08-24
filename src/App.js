import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { useState } from 'react';
import Card from './components/Card';

function App() { //react component - a function that returs jsx
  /*
  html - class attribute
  changed to 
  jsx - className */
  //onchange="myFunc()"
  //onChange={myFunc}

  //vanila js
  /*function myFunc(){
    let myInput = document.getElementById('myInput')
    document.getElementById('display').textContent =  myInput.value;
  }*/

  //react
  const [inputString, setInputString] = useState('')

  const [values, setValues] = useState([])

  const valueHandler = (event) => {
    setInputString(event.target.value)
  }

  const submitHandler = ()=>{
   setValues([...values, inputString])
   setInputString('')
  }

  
  return (
    <>
      <header className='bg-primary text-white text-center p-3'>
        <div className='display-1'>TODO</div>
      </header>


      <div className='container p-2 mt-3 w-25 d-flex'>
        <input placeholder='enter' className='form-control' onChange={valueHandler} value={inputString}/>
        <button className='btn btn-primary' onClick={submitHandler}> + </button>
      </div>

      {
        values.map((ele, index)=>{
          return <Card key={index} text={ele}/>
        })
      }
      
    </>
  );
}

export default App;
