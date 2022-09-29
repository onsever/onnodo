import React, { useState } from 'react';
import { useContext } from "react";
import styles from "./NewTask.module.css";
import { v4 as uuidv4 } from "uuid";
import {TaskContext} from "../../context/TaskContext";
import { useHistory } from "react-router-dom";
import { SiAddthis } from "react-icons/si"

export default function NewTask() {
    const [taskName, setTaskName] = useState("");
    const [taskCategory, setTaskCategory] = useState("");
    const [taskDate, setTaskDate] = useState("");
    const [taskDetails, setTaskDetails] = useState("");
    const [taskFlag, setTaskFlag] = useState("none");

    const history = useHistory();
    const { addTask, theme } = useContext(TaskContext);

    // Handles form submitting.
    const handleSubmit = (e) => {
        e.preventDefault();

        const taskObj = {
            id: uuidv4(),
            name: taskName,
            category: taskCategory,
            date: taskDate,
            details: taskDetails,
            flag: taskFlag,
            completed: false
        };

        addTask(taskObj);
        resetFields();
        history.push("/");
    }

    // Radio button functions.
    const handleRadioClick = (e) => {
        setTaskFlag(e.target.value);
    }

    const isRadioSelected = (value) => taskFlag === value;

    // Reset input fields after submitting the form.
    const resetFields = () => {
        setTaskName("");
        setTaskCategory("");
        setTaskDate("");
        setTaskDetails("");
    }

    return (
        <form onSubmit={handleSubmit} className={`${styles.form} ${theme.mode === "light" ? styles.light : ""}`}>
            <SiAddthis className={styles.icon} />
            <h2>Add a New Task</h2>
            <div className={styles.divider} />
            <label className={styles["content-label"]}>
                <span>Task name:</span>
                <input type="text" onChange={(e) => setTaskName(e.target.value)} value={taskName} maxLength="20" required />
            </label>
            <label className={styles["content-label"]}>
                <span>Category:</span>
                <input type="text" onChange={(e) => setTaskCategory(e.target.value)} value={taskCategory} maxLength="12" required />
            </label>
            <label className={styles["content-label"]}>
                <span>Date:</span>
                <input type="date" onChange={(e) => setTaskDate(e.target.value)} value={taskDate} required />
            </label>
            <label className={styles["content-label"]}>
                <span>Task details:</span>
                <textarea onChange={(e) => setTaskDetails(e.target.value)} value={taskDetails} required />
            </label>
            <div className={styles.holder}>
                <span>Flag:</span>
                <div className={styles["flag-container"]}>
                    <input type="radio" id="none-flag" name="none" value="none" onChange={handleRadioClick} checked={isRadioSelected("none")} />
                    <label htmlFor="none-flag">None</label>
                    <input type="radio" id="red-flag" name="red" value="red" onChange={handleRadioClick} checked={isRadioSelected("red")} />
                    <label htmlFor="red-flag" style={{color: "orangered", fontWeight: "bold"}}>Red</label>
                    <input type="radio" id="purple-flag" name="purple" value="purple" onChange={handleRadioClick} checked={isRadioSelected("purple")} />
                    <label htmlFor="purple-flag" style={{color: "purple", fontWeight: "bold"}}>Purple</label>
                    <input type="radio" id="yellow-flag" name="yellow" value="yellow" onChange={handleRadioClick} checked={isRadioSelected("yellow")} />
                    <label htmlFor="yellow-flag" style={{color: "yellow", fontWeight: "bold"}}>Yellow</label>
                </div>
            </div>
            <div className={styles["btn-container"]}>
                <button className={styles.btn}>Submit</button>
            </div>
        </form>
    );
}