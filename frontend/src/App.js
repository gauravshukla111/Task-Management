import { useState, useEffect } from 'react';
import Sidebar from './component/sidebar';
import Header from './component/header';
import Footer from './component/footer';
import TaskForm from './component/TaskForm';
import TaskList from './component/TaskList';
import './App.css';

export default function RootLayout() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [showTaskForm, setShowTaskForm] = useState(true); // State to manage which component to show

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const toggleTaskList = () => {
    setShowTaskForm(!showTaskForm); // Toggle between TaskForm and TaskList
  };

  // Fetch tasks from MongoDB
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/api/tasks');
    const data = await response.json();
    setTasks(data);
  };

  // Fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []); // Empty dependency array means this runs once when the component mounts

  // Add a new task to the task list
  const addTask = async (newTask) => {
    const response = await fetch('http://localhost:5000/api/tasks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newTask),
    });
    const addedTask = await response.json();
    setTasks((prevTasks) => [...prevTasks, addedTask]); // Add new task to state
  };

  // Update an existing task
  const updateTask = async (updatedTask) => {
    await fetch(`http://localhost:5000/api/tasks/${updatedTask._id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTask),
    });
    setTasks((prevTasks) => 
      prevTasks.map((task) => (task._id === updatedTask._id ? updatedTask : task))
    );
  };

  // Delete a task
  const deleteTask = async (taskId) => {
    await fetch(`http://localhost:5000/api/tasks/${taskId}`, {
      method: 'DELETE',
    });
    setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
  };

  return (
    <div lang="en">
      <div className="h-screen flex bg-gray-100">
        <Sidebar isCollapsed={isSidebarCollapsed} toggleTaskList={toggleTaskList} />
        <div className="flex-1 flex flex-col">
          <Header toggleSidebar={toggleSidebar} />
          <main className="flex-grow overflow-y-auto h-full">
            {/* Show TaskForm or TaskList based on state */}
            {showTaskForm ? (
              <TaskForm onSave={addTask} toggleTaskList={toggleTaskList} />
            ) : (
              <TaskList tasks={tasks} onUpdateTask={updateTask} onDeleteTask={deleteTask} />
            )}
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
