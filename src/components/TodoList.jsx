import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
function TodoList() {
  const {tasks} = useSelector((store) => store);
  console.log(tasks)
  return (
    <div className="todo-list">
      <h1>To do list</h1>
      {tasks.map((task) => (
        <div>
          <TodoItem title={task.title } isDone={task.isDone} id={task.id}/>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
