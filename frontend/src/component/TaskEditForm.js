// src/component/TaskEditForm.js
import { useState, useEffect } from 'react';
import styles from '../style/task.module.css';

export default function TaskEditForm({ task, onUpdate }) {
  const [formData, setFormData] = useState(task);

  useEffect(() => {
    setFormData(task);
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData); // Pass the updated task data to the parent component
  };

  return (
    <form onSubmit={handleSubmit} className={styles.taskEditForm}>
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" required />
      <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required />
      <input name="dueDate" type="date" value={formData.dueDate} onChange={handleChange} required />
      <select name="priority" value={formData.priority} onChange={handleChange}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <select name="status" value={formData.status} onChange={handleChange}>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <input name="assignedTo" value={formData.assignedTo} onChange={handleChange} placeholder="Assign to" />
      <textarea name="comments" value={formData.comments} onChange={handleChange} placeholder="Comments" />
      <button type="submit" className={styles.saveButton}>Update Task</button>
    </form>
  );
}
