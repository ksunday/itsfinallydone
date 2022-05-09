import React from "react";
import TodoItem from "./todoItem";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';


// the container of all the todos for the app with a count on top and clear all button on the bottom.
const TodoList = ({ todos, setTodos }) => {
  const deleteHandler2 = () => {
    setTodos([]);
  };
  return (
    // add a line of text that displays the total count of todos

    // a list container that will be full of toDoItem components from todoItem.js

    // the button that when clicked will remove all todos from the todo list

    <div>
      <h1>Tasks Remaining: {todos.length}</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            setTodos={setTodos}
            todos={todos}
            key={todo.id}
            text={todo.text}
            todo={todo}
          />
        ))}
        <Button variant="outlined" startIcon={<DeleteIcon />} color="success" onClick={deleteHandler2}>Delete All</Button>
      </ul>
      {/* // feel free to delete this temporary line, but you'll want to keep the divs. */}
    </div>
  );
};

export default TodoList;
