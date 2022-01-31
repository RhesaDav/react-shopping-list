import './App.css'
import shoppingIcon from './assets/shopping-icon.svg'
import plusIcon from './assets/plus-icon.svg'
import minusIcon from './assets/minus-icon.svg'
import {useState} from 'react'
import classnames from 'classnames'

function App() {
  const [value, setValue] = useState('');
  const [todo, setTodo] = useState([
    {title: 'Susu', count: 1},
    {title: 'Tahu', count: 1},
  ]);

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!value) {
      alert('No Blank List !')
      return 
    }

    const addTodo = [...todo, {
      title: value,
      count: 1
    }]

    setTodo(addTodo)
  }

  const handleIncreaseCount = (index) => {
    const newTodo = [...todo]

    newTodo[index].count = newTodo[index].count +1

    setTodo(newTodo)
  }

  const handleDecreaseCount = (index) => {
    const newTodo = [...todo]

    newTodo[index].count = newTodo[index].count -1

    setTodo(newTodo)
  }

  return (
    <>
    <nav  className='nav'>
      <img src={shoppingIcon} className="nav-icon" alt='shopping icon'/>
      <h1 className='nav-title'>Shopping List</h1>
    </nav>

    <section className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <input onChange={(e) => {setValue(e.target.value)}} value={value} className='input' type='text' placeholder='list'/>
        <button className='add-button' type='submit'>Submit</button>
      </form>

      {todo.length > 0 ? (
        <div className='todo-content'>
          {todo.map((todo,index, arr) => {
            return(
              <div key={index} className={`todo ${!(arr.length=== index +1) && 'todo-divider'}`}>
                {todo.title}
                <div className='todo-icon-wrapper'>

                  <div className='todo-count' >{todo.count}</div>
                  <button onClick={()=> handleIncreaseCount(index)} className='todo-action-button'>
                    <img src={plusIcon} alt='plus icon' />
                  </button>

                  <button onClick={() => handleDecreaseCount(index)} className='todo-action-button'>
                    <img src={minusIcon} alt='minus icon' />
                  </button>

                </div>
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