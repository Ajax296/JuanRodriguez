import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';

const TaskList = ({ tasks }) => {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;