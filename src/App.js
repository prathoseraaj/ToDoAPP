import { use, useState } from 'react';
import './App.css';
import { AiFillDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [newtitle, setNewtitle] = useState('');
  const [newdescription, setNewdiscription] = useState('');

  let handleAddtodos = () => {
    let newTodoItems = {
      title: newtitle,
      description: newdescription
    }
    let updateTodos = [...todos]
    updateTodos.push(newTodoItems)
    setTodos(updateTodos)
    
  }

  return (
    <div className="App">
      <h1>My ToDos</h1>
      <div className='todopage'>
        <div className='todo-input'>
          <div className='label-item'>
            <label htmlFor="text">Title</label>
            <input type="text" 
                   placeholder="What's Your Plan"
                   value={newtitle}
                   onChange={(e) => {setNewtitle(e.target.value)}}/>
          </div>
          <div className='label-item'>
            <label htmlFor="text">Description</label>
            <input type="text" 
                   placeholder="About"
                   value={newdescription}
                   onChange={(e) => {setNewdiscription(e.target.value)}}/>
          </div>
          <div className='label-item'>
            <br />
            <button className='my-button' type='button' onClick={handleAddtodos}>ADD</button>
          </div>
        </div>
        <div className='buttons'>
          <button className={`sec-button ${isCompleteScreen === false && 'active'}`} 
                  onClick={() => setIsCompleteScreen(false) }>TODO</button>
          <button className={`sec-button ${isCompleteScreen === true && 'active'}`} 
                  onClick={() => setIsCompleteScreen(true) }>Completed</button>
        </div>
        {todos.map((item,index) => {
          return(
          <div className='todolist-area'>
          <div className='intodoarea' key={index}>
            <h2 className='toadd'>{item.title}</h2>  {/*dummy test*/}
            <p className='toadd' id='description'>{item.description}</p>  {/*dummy test*/}
          </div>
          <div className='intodoarea' id='iconss'>
          <AiFillDelete className='icons' id='deleteicon' onClick={handleDeletebutton}/>
          <BsCheckLg className='icons' id='tickicon' onClick={handleTickbutton}/>
          </div>
        </div>
        )})}
      </div>
    </div>
  );
}

export default App;
