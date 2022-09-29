import React, { useContext } from 'react';
import styles from "./EmptyContainer.module.css";
import { RiTodoLine } from "react-icons/ri"
import {TaskContext} from "../../context/TaskContext";

function EmptyContainer(props) {
    const { theme } = useContext(TaskContext);

    return (
        <div className={`${styles.container} ${theme.mode === "light" ? styles.light : ""}`}>
            <div className={styles.icon}>
                <RiTodoLine style={{width: "60px", height: "60px", color: theme.mode === "dark" ? "#fff" : "var(--main-color)"}} />
            </div>
            <div className={styles.content}>
                <p>You have no tasks assigned.</p>
            </div>
        </div>
    );
}

export default EmptyContainer;