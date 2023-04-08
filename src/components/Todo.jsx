import React, { useState } from "react";
import { useTodoStore } from "../store-zustand/TodoStore";
// import useTodoStore from '../store/TodoStore'
const Todo = () => {
  const [tododata, setTododata] = useState("");

  // const todos = useTodoStore(state=>state.todos)
  // const addTodos =useTodoStore(state=>state.addTodos)
  const { todos, addTodos ,removeTodo } = useTodoStore();

  return (
    <>
      <div>
        <input
          onChange={(e) => setTododata(e.target.value)}
          placeholder="write your task here...."
        ></input>
        <button onClick={() => addTodos(tododata)}>Add Todo</button>
      </div>
 
        <div>
          {todos.map((items, i) => (
            
            <div key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: 10,
              boxShadow: "1px 1px 15px #ddd",
            }}
          >
            <h1>{items}</h1>
            <button onClick={()=>removeTodo(tododata)}>close</button>
            </div>
        
          ))}
        </div>
      {/* </div> */}
    </>
  );
};

export default Todo;
