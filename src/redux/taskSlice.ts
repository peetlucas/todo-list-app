// src/store/tasksSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { saveTasksToLocalStorage } from "../utils/localStorage";
import { ITask } from "../../types";

interface TaskState {
  tasks: ITask[];
}

const initialState: TaskState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<ITask>) => {
      state.tasks.push(action.payload);
      saveTasksToLocalStorage(state.tasks);
    },    
    editTask: (state, action: PayloadAction<ITask>) => {
  state.tasks = state.tasks.map((task) =>
    task.id === action.payload.id ? { ...task, ...action.payload } : task
  );
  saveTasksToLocalStorage(state.tasks);   
    },
    toggleTask: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find((t) => t.id === action.payload);
      if (task) {
        task.isComplete = !task.isComplete;
        saveTasksToLocalStorage(state.tasks);
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      saveTasksToLocalStorage(state.tasks);
    },
    setTasks: (state, action: PayloadAction<ITask[]>) => {
      state.tasks = action.payload;
    },
    markOverdueTasks: (state) => {
      const currentTime = new Date().getTime();
      state.tasks = state.tasks.map((task) => {
        if (task.dueDate && new Date(task.dueDate).getTime() < currentTime) {
          task.isComplete = true;
        }
        return task;
      });
      saveTasksToLocalStorage(state.tasks);
    },
  },
});

export const { addTask, editTask, toggleTask, deleteTask, setTasks,markOverdueTasks, } = tasksSlice.actions;
export default tasksSlice.reducer;

// Selector to get the tasks state
export const selectTasks = (state: RootState) => state.tasks.tasks;
