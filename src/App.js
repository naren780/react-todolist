import React, { useState } from 'react';
import ItemList from './components/ItemList';
import './App.css';
function App() {
  const [data, setData] = useState("");
  const [item, setItem] = useState([]);
  const changeHandler = (e) => {
    setData(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault(); 
    if (data === "") {
      return false
    }
    else {    
      setData("")
      return  setItem((prevValue) => { return [data, ...prevValue] });         
    }
  }
  const onDelete = (ind) => {
    setItem(() => { 
      return item.filter((val,index) => {
        return index !== ind;
      }) 
    });
    // prev.filter((val, ind) => items.id !== ind)
  }
  return (
    <div className="app">
      <div className='heading'>
        <h4>To-Do-List</h4>
      </div>
      <div>
        <input type="text"
          name="itemname"
          value={data}
          onChange={changeHandler}
          autoComplete="off" />

        <button onClick={submitHandler}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map((val, index) =>
            <ItemList key={index}
              id={index}
              items={val}
              onChecked={onDelete} />)}
        </ul>
      </div>
    </div>
  );
}
export default App;
