import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

function App() { //react component - a function that returs jsx
  /*
  html - class attribute
  changed to 
  jsx - className */
  return (
    <header className='bg-primary text-white text-center p-3'>
      <h1>Welcome to UI Designing</h1>
      <h3>React + Bootstrap</h3>
    </header> 
  );
}

export default App;
