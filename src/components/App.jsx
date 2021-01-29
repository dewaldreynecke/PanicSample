import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState(["An Item"]);

  function handleTyping(event) {
    const typedText = event.target.value;
    setInputText(typedText);
  }

  function addItemToList(event) {
    setItems([...items, inputText]);
    setInputText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleTyping} type="text" value={inputText} />
        <button onClick={addItemToList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((listItem) => (
            <li>{listItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
