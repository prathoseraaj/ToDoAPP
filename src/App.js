import { useEffect, useState } from 'react';
import './App.css';
import { AiFillDelete } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [todos, setTodos] = useState([]);
  const [newtitle, setNewtitle] = useState('');
  const [newdescription, setNewdiscription] = useState('');
  const [completedTodo, setIsCompletedTodo] = useState([]);

  let handleAddtodos = () => {
    let newTodoItems = {
      title: newtitle,
      description: newdescription
    }
    let updateTodos = [...todos]
    updateTodos.push(newTodoItems)
    setTodos(updateTodos)
    localStorage.setItem('todolist',JSON.stringify(updateTodos))
  }

  let handleDeletebutton = (index) => {
    let reduceTodos = [...todos]
    reduceTodos.splice(index,1)
    localStorage.setItem('todolist',JSON.stringify(reduceTodos))
    setTodos(reduceTodos)
  }

  let handleTickbutton = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let completedOn = dd + `-` + mm + `-` + yy + ` at ` + h + `:` + m + `:` + s ;
    console.log(completedOn); //check the date and time

    let filteredItem = {
      ...todos[index],
      completedOn : completedOn ,

    };

    let completeTodo = [...completedTodo];
    completeTodo.push(filteredItem);
    setIsCompletedTodo(completeTodo);
    localStorage.setItem('completedtodolist', JSON.stringify(completeTodo));
    handleDeletebutton(index);
  }

  useEffect(() => {
    let savedTodos = JSON.parse(localStorage.getItem('todolist'));

    if(savedTodos){
      setTodos(savedTodos)
    }
    console.log(localStorage); // to check the local storage

    let savedCompleteTodos = JSON.parse(localStorage.getItem('completedtodolist'));

    if(savedCompleteTodos){
      setIsCompletedTodo(savedCompleteTodos)
    }
    console.log(localStorage); // to check the local storage

  },[])

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
        {isCompleteScreen===false && todos.map((item,index) => {
          return(
          <div className='todolist-area'>
          <div className='intodoarea' key={index}>
            <h2 className='toadd'>{item.title}</h2>  {/*dummy test*/}
            <p className='toadd' id='description'>{item.description}</p>  {/*dummy test*/}

          </div>
          <div className='intodoarea' id='iconss'>
          <AiFillDelete className='icons' id='deleteicon' onClick={() => handleDeletebutton(index)}/>
          <BsCheckLg className='icons' id='tickicon' onClick={() => handleTickbutton(index)}/>
          </div>
        </div>
        )})}
        {isCompleteScreen===true && completedTodo.map((item,index) => {
          return(
          <div className='todolist-area'>
          <div className='intodoarea' key={index}>
            <h2 className='toadd'>{item.title}</h2>  {/*dummy test*/}
            <p className='toadd' id='description'>{item.description}</p>  {/*dummy test*/}
            <p className='toadd' id='description'>CompletedOn:{item.completedOn}</p>  {/*dummy test*/}
          </div>
          <div className='intodoarea' id='iconss'>
          <AiFillDelete className='icons' id='deleteicon' onClick={() => handleDeletebutton(index)}/>
          </div>
        </div>
        )})}
      </div>
    </div>
  );
}

export default App;
