import React, { useReducer, useEffect, createContext } from "react";
import { taskReducer } from "../reducers/taskReducer";
import { themeReducer } from "../reducers/themeReducer";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, [], () => {
    const data = localStorage.getItem("tasks");
    return data ? JSON.parse(data) : [];
  });

  const [theme, themeHandler] = useReducer(
    themeReducer,
    {
      mode: "dark",
    },
    () => {
      const data = localStorage.getItem("mode");
      return data
        ? JSON.parse(data)
        : { 0: "l", 1: "i", 2: "g", 3: "h", 4: "t", mode: "light" };
    }
  );

  const addTask = (task) => {
    dispatch({ type: "ADD_TASK", payload: task });
  };

  const deleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  const updateCompleted = (id) => {
    dispatch({
      type: "SET_COMPLETED",
      payload: tasks.find((task) => task.id === id),
    });
  };

  const changeMode = (mode) => {
    themeHandler({ type: "CHANGE_MODE", payload: mode });
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(theme));
  }, [theme]);

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTask, updateCompleted, theme, changeMode }}
    >
      {children}
    </TaskContext.Provider>
  );
};
