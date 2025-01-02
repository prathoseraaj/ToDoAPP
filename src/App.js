import { useState } from 'react';
import './App.css';
import { AiFillDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false)
  return (
    <div className="App">
      <h1>My ToDos</h1>
      <div className='todopage'>
        <div className='todo-input'>
          <div className='label-item'>
            <label htmlFor="text">Title</label>
            <input type="text" placeholder="What's Your Plan"/>
          </div>
          <div className='label-item'>
            <label htmlFor="text">Description</label>
            <input type="text" placeholder="About"/>
          </div>
          <div className='label-item'>
            <br />
            <button className='my-button' type='button'>ADD</button>
          </div>
        </div>
        <div className='buttons'>
          <button className={`sec-button ${isCompleteScreen === false && 'active'}`} 
                  onClick={() => setIsCompleteScreen(false) }>TODO</button>
          <button className={`sec-button ${isCompleteScreen === true && 'active'}`} 
                  onClick={() => setIsCompleteScreen(true) }>Completed</button>
        </div>
        <div className='todolist-area'>
          <div className='intodoarea'>
            <h2 className='toadd'>Task 1</h2>  {/*dummy test*/}
            <p className='toadd' id='description'>description</p>  {/*dummy test*/}
          </div>
          <div className='intodoarea' id='iconss'>
          <AiFillDelete className='icons' id='deleteicon'/>
          <BsCheckLg className='icons' id='tickicon'/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
