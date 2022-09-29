import React, { useContext, useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import styles from "./TaskDetails.module.css";
import {TaskContext} from "../../context/TaskContext";
import {RiFlagFill} from "react-icons/ri";

function TaskDetails(props) {
    const [retrievedTask, setRetrievedTask] = useState([]);
    const { id } = useParams();
    const { tasks, theme } = useContext(TaskContext);

    useEffect(() => {
        setRetrievedTask(tasks.find((task) => task.id === id));
    }, []);

    const convertDate = (value) => {
        let date = new Date(value);
        date = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
        return date.toString().substring(0, 15);
    }

    console.log(convertDate(retrievedTask.date))

    return (
        <div className={`${styles.task} ${theme.mode === "light" ? styles.light : ""}`}>
            <div className={styles.head}>
                <h2 className={styles.title}>{retrievedTask.name}</h2>
                <p>{convertDate(retrievedTask.date)}</p>
            </div>
            <p className={styles.category}><span>Category: </span>{retrievedTask.category}</p>
            <div className={styles.divider} />
            <p className={styles.details}>{retrievedTask.details}</p>
            {retrievedTask.flag === "none" ? <></> : <div className={styles.flag}>
                <RiFlagFill style={{color: retrievedTask.flag === "red" ? "orangered" : retrievedTask.flag === "yellow" ? "yellow" : retrievedTask.flag === "purple" ? "purple" : "white"}} />
            </div>}
        </div>
    );
}

export default TaskDetails;