"use client";
import { useState } from "react";
import logo from "../assets/logo.png";
import mini from "../assets/mini_logo.png";
import { Link } from "react-router-dom";
import { AiOutlineUnorderedList } from "react-icons/ai";

const Sidebar = ({ isCollapsed, toggleTaskList }) => {
  const [activeMenu, setActiveMenu] = useState("");

  const handleMenuClick = (menu) => {
    if (activeMenu === menu) {
      setActiveMenu("");
    } else {
      setActiveMenu(menu);
    }
  };

  return (
    <aside
      className={`${
        isCollapsed ? "w-[80px]" : "w-[300px]"
      } h-screen bg-white text-black transition-all duration-300`}
    >
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center justify-center py-4">
          <img
            src={isCollapsed ? mini : logo}
            alt="Logo"
            className="text-2xl font-bold text-white"
          />
        </div>
      </Link>

      {/* Sidebar Menu */}
      <nav className="mt-10">
        <ul className="flex flex-col space-y-1">
          {/* Task Management Section */}
          <li>
            <div
              className="flex items-center justify-between px-4 py-3 cursor-pointer hover:bg-slate-400"
              onClick={() => handleMenuClick("taskManagement")}
            >
              <div className="flex items-center">
                <AiOutlineUnorderedList size={20} className="mr-3" />
                {!isCollapsed && <span>Task Management</span>}
              </div>
              {!isCollapsed &&
                (activeMenu === "taskManagement" ? (
                  <span className="text-gray-500">▼</span>
                ) : (
                  <span className="text-gray-500">►</span>
                ))}
            </div>
            {/* Dropdown for Task Management */}
            {activeMenu === "taskManagement" && (
              <ul
                className={`ml-10 mt-1 ${
                  isCollapsed
                    ? "absolute left-[40px] top-[19%] bg-gray-100 w-[150px]"
                    : ""
                }`}
              >
                <li className="py-2 px-3 hover:bg-slate-400">
                  <Link to="/add-task" onClick={toggleTaskList}>
                    Add Task
                  </Link>
                </li>

                <li className="py-2 px-3 hover:bg-slate-400">
                  <Link
                    to="/task-list"
                    onClick={toggleTaskList} // Trigger toggleTaskList function
                  >
                    See Task List
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
