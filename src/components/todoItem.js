import React from "react";
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';

import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';


// an item in the todo list of the app.
const TodoItem = ({ text, todo, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };

 
  return (
    // display the text of the todo

    // a button that when clicked deletes the todo from the todo list.
    <div>
      <Stack direction="row"
  justifyContent="center"  
  alignItems="center"
  spacing={2}>
    
      <Paper  elevation={4} sx={{backgroundColor:'#95f0f5'}} square>{text}</Paper>
      <IconButton aria-label="delete" 
      onClick= {deleteHandler} color="success">
    
      <DeleteIcon/>
      </IconButton>
      </Stack>
      
      {/* // feel free to delete this temporary line, but you'll want
     //to keep the divs. */}
    </div>
  );
};

export default TodoItem;
