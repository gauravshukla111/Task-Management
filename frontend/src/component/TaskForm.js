// /src/component/TaskForm.js
import { useState } from 'react';
import styles from '../style/task.module.css';

export default function TaskForm({ onSave }) {
  const [task, setTask] = useState({
    userName: '',
    title: '',
    description: '',
    dueDate: '',
    priority: 'Low',
    status: 'Pending',
    assignedTo: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task),
    });
    const newTask = await response.json();
    onSave(newTask);
    setTask({
      userName: '',
      title: '',
      description: '',
      dueDate: '',
      priority: 'Low',
      status: 'Pending',
      assignedTo: '',
      comments: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.taskForm}>
      <input
        name="userName"
        value={task.userName}
        onChange={handleChange}
        placeholder="Your Name"
        required
      />
      <input
        name="title"
        value={task.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="description"
        value={task.description}
        onChange={handleChange}
        placeholder="Description"
        required
      />
      <input
        name="dueDate"
        type="date"
        value={task.dueDate}
        onChange={handleChange}
        required
      />
      <select
        name="priority"
        value={task.priority}
        onChange={handleChange}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <select
        name="status"
        value={task.status}
        onChange={handleChange}
      >
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <input
        name="assignedTo"
        value={task.assignedTo}
        onChange={handleChange}
        placeholder="Assign to (e.g., John Doe)"
      />
      <textarea
        name="comments"
        value={task.comments}
        onChange={handleChange}
        placeholder="Comments"
      />
      <button type="submit" className={styles.saveButton}>Save Task</button>
    </form>
  );
}
