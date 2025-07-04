import React, { useState } from 'react';
import './TaskForm.css';

const TaskForm = ({ onAddTask }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.status) {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: formData.title,
      description: formData.description,
      status: formData.status
    };

    onAddTask(newTask);
    setFormData({ title: '', description: '', status: '' });
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(e);
    }
  };

  return (
    <div className="task-form">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleInputChange}
        placeholder="Título de la tarea..."
        className="form-input"
      />
      <input
        type="text"
        name="description"
        value={formData.description}
        onChange={handleInputChange}
        placeholder="Descripción de la tarea..."
        className="form-input"
      />
      <select
        name="status"
        value={formData.status}
        onChange={handleInputChange}
        className="form-select"
      >
        <option value="" disabled>Estado</option>
        <option value="pendiente">Pendiente</option>
        <option value="en-proceso">En Proceso</option>
        <option value="completada">Completada</option>
      </select>
      <button onClick={handleSubmit} className="form-button">
        Agregar Tarea
      </button>
    </div>
  );
};

export default TaskForm;