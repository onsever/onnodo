import React from 'react';
import { Link } from "react-router-dom";
import { RiDeleteBin6Fill, RiFlagFill } from "react-icons/ri";
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";
import styles from "./Task.module.css";

function Task( { id, name, category, date, details, flag, completed, onDelete, onCompleted, mode } ) {
    return (
        <div className={`${styles.card} ${mode === "light" ? styles.light : ""}`}>
            <div className={styles.info}>
                <h3>{name}</h3>
                <p>{date}</p>
            </div>
            <p className={styles.category}><span>Category: </span>{category}</p>
            <div className={styles.details}>{details.substring(0, 35)}...</div>
            <div className={styles.actions}>
                <Link to={`/tasks/${id}`} className={styles.btn}>Details</Link>
                <div>
                    { completed ? <MdOutlineCheckBox className={styles.completed} onClick={() => onCompleted(id)} /> : <MdOutlineCheckBoxOutlineBlank className={styles.completed}  onClick={() => onCompleted(id)} /> }
                    <RiDeleteBin6Fill className={styles.delete} onClick={() => onDelete(id)} />
                </div>
            </div>
            {flag === "none" ? <></> : <div className={styles.flag}>
                <RiFlagFill style={{color: flag === "red" ? "orangered" : flag === "yellow" ? "yellow" : flag === "purple" ? "purple" : "white"}} />
            </div>}
        </div>
    );
}

export default Task;