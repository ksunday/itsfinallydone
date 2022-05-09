import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";

const App = () => {
 

  // your app state should be stored here. You may use more than what is currently provided if you feel you need it.
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  
  return (
  
    <div className="App">
      {/* app title */}
      <header>
        <h1>The Sunday To-Do List </h1>
      </header>
      
      <TodoInput
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        
      />
      <TodoList setTodos={setTodos} todos={todos} />

      {/* to do list view component */}
      
    </div>
 
  );
};

export default App;
