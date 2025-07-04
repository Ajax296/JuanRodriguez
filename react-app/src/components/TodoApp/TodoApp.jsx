import React, { useState } from 'react';
import TaskForm from '../TaskForm/TaskForm';
import TaskList from '../TaskList/TaskList';
import './TodoApp.css';

const TodoApp = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Ecuaciones Diferenciales",
      description: "Estudiar Parcial 3",
      status: "completada"
    }
  ]);

  const handleAddTask = (newTask) => {
    setTasks(prev => [...prev, newTask]);
  };

  return (
    <div className="todo-container">
      <div className="principal-div">
        <h1 className="list-h1">To-Do List</h1>
        <TaskForm onAddTask={handleAddTask} />
        <h3 className="list-h3">Lista de Tareas</h3>
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
};

export default TodoApp;