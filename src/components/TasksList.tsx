"use client";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectTasks,
  toggleTask,
  setTasks,
  deleteTask,
  markOverdueTasks,
} from "../redux/taskSlice";
import AddTask from "./AddTask";
import Header from '../components/Header';
import Task from "../components/Task";
import { ITask } from "../../types";
import { getTasksFromLocalStorage } from "../utils/localStorage";

const TasksList: React.FC = () => {
  const tasks = useSelector(selectTasks);
  const [showAddTask, setShowAddTask] = useState(false);
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const dispatch = useDispatch();

  const handleToggleTask = (id: string) => {
    dispatch(toggleTask(id));
  };

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };

  // useEffect(() => {
  //   const storedTasks = getTasksFromLocalStorage();
  //   if (storedTasks) {
  //     dispatch(setTasks(storedTasks));
  //   }
  //   dispatch(markOverdueTasks());
  // }, [dispatch]);

  useEffect(() => {
    const data = localStorage.getItem("tasks");

    try {      
      const tasks = data ? JSON.parse(data) : [];
      console.log(data);
      if (tasks && tasks.length > 0) {
      dispatch(setTasks(tasks));
      dispatch(markOverdueTasks());
    }
    } catch (err) {
      console.log('Error loading tasks from localStorage: ', err);
    }    
  }, [dispatch]);

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.isComplete;
    if (filter === 'uncompleted') return !task.isComplete;
    return true;
  });

  const sortedTasks = filteredTasks.sort((a, b) => {
    if (sortOrder === 'asc') {
      return new Date(a.dueDate || 0).getTime() - new Date(b.dueDate || 0).getTime();
    }
    return new Date(b.dueDate || 0).getTime() - new Date(a.dueDate || 0).getTime();
  });

  return (
    <>
       <Header
          onAdd={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask}
        />         
        <div className="mt-3">
          {showAddTask && <AddTask />}
        </div>
        <div className="flex justify-between mb-4">
          <span className="flex justify-between mb-4">
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="bg-slate-800 border border-white rounded-md p-2">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
          
          <button onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')} className="bg-purple-400 ml-4 hover:bg-purple-300 text-white px-4 rounded-md">
            Sort by Due Date ({sortOrder === 'asc' ? 'Earliest First' : 'Latest First'})
          </button>
          </span>
      </div>
      <ul className="space-y-2">
        {sortedTasks.length === 0 ? (
          <p className="text-gray-500 flex items-center">No tasks!</p>
        ) : (
          sortedTasks.map((task) => (
            <Task
              key={task.id}
              task={task}
              handleDeleteTask={handleDeleteTask}
              handleToggleTask={handleToggleTask}
            />
          ))
        )}
      </ul>        
    </>
  );
};

export default TasksList;
