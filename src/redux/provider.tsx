"use client";
import React, { useEffect } from 'react';
import store from "./store";
import { Provider } from "react-redux";
import { markOverdueTasks, setTasks } from './taskSlice';
import { saveTasksToLocalStorage } from "../utils/localStorage";
import { getTasksFromLocalStorage } from '../utils/localStorage';

const ReduxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    const tasks = getTasksFromLocalStorage();
    store.dispatch(markOverdueTasks());
    // Load tasks from local storage after dispatching markOverdueTasks
    store.dispatch(setTasks(tasks));
  }, []);

  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;

