import { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import styles from '../style/task.module.css';
import TaskEditForm from './TaskEditForm';

export default function TaskList({ tasks, onUpdateTask, onDeleteTask }) {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('dueDate');
  const [editTask, setEditTask] = useState(null);

  const handleFilterChange = (e) => setFilter(e.target.value);
  const handleSortChange = (e) => setSort(e.target.value);

  const filteredTasks = (tasks || []).filter(task => {
    const taskStatus = task.status || '';
    const taskPriority = task.priority || '';
    return (
      taskStatus.includes(filter) || taskPriority.includes(filter)
    );
  }).sort((a, b) => {
    const aSort = a[sort] || '';
    const bSort = b[sort] || '';
    return aSort.localeCompare(bSort);
  });

  const handleEditTask = (task) => setEditTask(task);

  const handleUpdateTask = async (updatedTask) => {
    await fetch(`http://localhost:5000/api/tasks/${updatedTask._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask),
    });
    onUpdateTask(updatedTask);
    setEditTask(null);
  };

  return (
   <div className="taskListWrapper">
     <div className={styles.taskList}>
      <h2>Task List</h2>
      <div className={styles.taskControls}>
        <select value={filter} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Low">Low Priority</option>
          <option value="Medium">Medium Priority</option>
          <option value="High">High Priority</option>
        </select>
        <select value={sort} onChange={handleSortChange}>
          <option value="dueDate">Due Date</option>
          <option value="priority">Priority</option>
          <option value="status">Status</option>
        </select>
      </div>

      <div className={styles.taskTableContainer}>
        <table className={styles.taskTable}>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Title</th>
              <th>Description</th>
              <th>Due Date</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Assigned To</th>
              <th>Comments</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map(task => (
              <tr key={task._id}>
                {editTask && editTask._id === task._id ? (
                  <td colSpan="9">
                    <TaskEditForm task={editTask} onUpdate={handleUpdateTask} />
                  </td>
                ) : (
                  <>
                    <td>{task.userName || 'N/A'}</td>
                    <td>{task.title || 'N/A'}</td>
                    <td>{task.description || 'N/A'}</td>
                    <td>{task.dueDate || 'N/A'}</td>
                    <td>{task.priority || 'N/A'}</td>
                    <td>{task.status || 'N/A'}</td>
                    <td>{task.assignedTo || 'N/A'}</td>
                    <td>{task.comments || 'N/A'}</td>
                    <td>
                      <button onClick={() => handleEditTask(task)} className={styles.editButton}>
                        <FaEdit title="Edit" />
                      </button>
                      <button onClick={() => onDeleteTask(task._id)} className={styles.deleteButton}>
                        <FaTrash title="Delete" />
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
   </div>
  );
}
