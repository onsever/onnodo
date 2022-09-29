import React, { useContext } from 'react';
import { useLocation } from "react-router-dom";
import styles from "./Result.module.css";
import {TaskContext} from "../../context/TaskContext";
import Task from "../../components/task/Task";

function Result(props) {
    const queryString = useLocation();
    const queryParams = new URLSearchParams(queryString.search);
    const query = queryParams.get("query");

    const { tasks, theme } = useContext(TaskContext);

    return (
        <div className={`${styles.holder} ${theme.mode === "light" ? styles.light : ""}`}>
            <h2 className={styles.title}>Search results for tasks including "<span>{query}</span>"...</h2>
            <div className={styles.container}>
                {tasks && tasks.filter(task => task.name.toLowerCase().includes(query)).map(task => <Task key={task.id} {...task} mode={theme.mode} />)}
            </div>
        </div>
    );
}

export default Result;