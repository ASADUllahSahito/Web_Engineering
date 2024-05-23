import React, { useState } from 'react';
import './App.css';

function App(props) {
  const [item, updateItem] = useState("");
  const [goodItems, updateGoodItems] = useState([]);
  const [badItems, updateBadItems] = useState([]);
  const [worstItems, updateWorstItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Good");


  const handleInputChange = (event) => {
    updateItem(event.target.value);
  };


  const addItem = () => {
    if (item.trim() === "") return; 

    switch (selectedCategory) {
      case "Good":
        updateGoodItems([...goodItems, item]);
        break;
      case "Bad":
        updateBadItems([...badItems, item]);
        break;
      case "Worst":
        updateWorstItems([...worstItems, item]);
        break;
      default:
        break;
    }

    updateItem(""); 
  };

  return (
    <div className="main_div">
      <div className="center_div">
        <h1>To Do List</h1>
        <div className="inner_div">
          <input className="inp" type="text" placeholder="Add an item" value={item} onChange={handleInputChange} />
          <select class="Select" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="Good">Good</option>
            <option value="Bad">Bad</option>
            <option value="Worst">Worst</option>
          </select>
          <button id="btn1" onClick={addItem}> + </button>
        </div>
        <div className="categories">
          <div className="category">
            <h2>Good</h2>
            <ul>
              {goodItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="category">
            <h2>Bad</h2>
            <ul>
              {badItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="category">
            <h2>Worst</h2>
            <ul>
              {worstItems.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
