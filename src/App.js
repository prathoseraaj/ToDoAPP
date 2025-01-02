import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My ToDos</h1>
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
          <button id='my-button' type='button'>ADD</button>
        </div>
      </div>
      <div className='buttons'>
        <button>TODO</button>
        <button>Completed</button>
      </div>
      <div className='todolist-area'>
        <div>
          <h3>Task 1</h3>  {/*dummy test*/}
          <p>description</p>  {/*dummy test*/}
        </div>
      </div>
    </div>
  );
}

export default App;
