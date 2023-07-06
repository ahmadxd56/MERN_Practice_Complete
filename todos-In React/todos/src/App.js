import React, { useState, useRef } from "react";
// import data from "./data"

const App = () => {
  const [todos, setTodos] = useState([
    { content: "Eat Breakfast", completed: false },
    { content: "Wash My Bike", completed: false },
  ]);
  const newTodoInput = useRef(null);
  //   //Read
  //   const readTodo = (data.todo)=> {

  // }
  //Create 
  const handleCreate = (todoContent) => {
    setTodos([...todos, { content: todoContent, completed: false }]);
  };
  //Update
  const handleUpdate = (todoIndex, todoContent, todoCompleted) => {
    const newTodos = [...todos];
    newTodos[todoIndex] = { content: todoContent, completed: todoCompleted };
    setTodos(newTodos);
  };
  //Delete
  const handleDelete = (todoIndex) => {
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>TODOs CRUD</h1>
      <div>
        <input type="text" ref={newTodoInput} />
        <button onClick={() => handleCreate(newTodoInput.current.value)}>
          Create Todo
        </button>
      </div>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.content}
            </span>
            <button onClick={() => handleUpdate(index, todo.content, !todo.completed)}>
              {todo.completed ? "Undo" : "Complete"}
            </button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default App;
