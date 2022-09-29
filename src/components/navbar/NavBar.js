import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import SearchBar from "../searchbar/SearchBar";
import { AiOutlinePlus } from "react-icons/ai"
import {TaskContext} from "../../context/TaskContext";

function NavBar(props) {
    const { theme } = useContext(TaskContext);

    return (
        <div className={`${styles["nav-container"]} ${theme.mode === "light" ? styles.light : ""}`}>
            <nav className={styles.navigation}>
                <Link to="/" className={styles["main-title"]}><h1>OnnoDO</h1></Link>
                <div className={styles.side}>
                    <SearchBar />
                    <Link to="/add" className={styles.add}><AiOutlinePlus className={styles.icon} /> New Task</Link>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;