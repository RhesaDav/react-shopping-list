import './App.css'
import shoppingIcon from './assets/shopping-icon.svg'
import {useState} from 'react'

function App() {
  const [value, setValue] = useState('');
  const [todo, setTodo] = useState([
    {title: 'Susu', count: 1},
    {title: 'Tahu', count: 1},
  ]);

  console.log('value=', value)

  return (
    <>
    <nav  className='nav'>
      <img src={shoppingIcon} className="nav-icon" alt='shopping icon'/>
      <h1 className='nav-title'>Shopping List</h1>
    </nav>

    <section className='container'>
      <form className='form'>
        <input onChange={(e) => {setValue(e.target.value)}} value={value} className='input' type='text' placeholder='list'/>
        <button className='add-button' type='submit'>Submit</button>
      </form>

      {todo.length > 0 ? (
        <div className='todo'>
          {todo.map((todo) => {
            return(
              <div>
                {todo.title}
                {todo.count}
              </div>
            )
          })}
        </div>
      ) : (
        <div>Kosong</div>
      )} 

    </section>
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