import './App.css'
import shoppingIcon from './assets/shopping-icon.svg'
import {useState} from 'react'

function App() {
  const [value, setValue] = useState('');

  console.log('value=', value)

  return (
    <>
    <nav  className='nav'>
      <img src={shoppingIcon} className="nav-icon" alt='shopping icon'/>
      <h1 className='nav-title'>Shopping List</h1>
    </nav>

    <main className='container'>
      <form className='form'>
        <input onChange={(e) => {setValue(e.target.value)}} value={value} className='input' type='text' placeholder='list'/>
        <button className='add-button' type='submit'>Submit</button>
      </form>
    </main>
    </>
  );
}

export default App;

// function AppDua() {
//   const [first, setfirst] = useState(0);

//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h1>{first}</h1>
//       <button onClick={()=>(setfirst (first +1))}>plus</button>
//       <button onClick={()=>(setfirst (first -1))}>minus</button>
//     </div>
//   );
// }