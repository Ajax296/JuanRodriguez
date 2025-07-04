import React from 'react';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  const getStatusText = (status) => {
    switch(status) {
      case 'pendiente': return 'Pendiente';
      case 'en-proceso': return 'En Proceso';
      case 'completada': return 'Completada';
      default: return '';
    }
  };

  return (
    <li className="task-item">
      <span className="task-title">{task.title}</span>
      <span className="task-description">{task.description}</span>
      <div className="task-details">
        <span className={`status-${task.status}`}>
          {getStatusText(task.status)}
        </span>
      </div>
    </li>
  );
};

export default TaskItem;