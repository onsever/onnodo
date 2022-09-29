import React from 'react';
import styles from "./ActionBar.module.css";
import {CgDarkMode} from "react-icons/cg";

function ActionBar( { tasks, onFilter, onMode, mode } ) {
    const handleFilter = (e) => {
        e.preventDefault();
        onFilter(e.target.value === "all" ? tasks : tasks.filter((task) => task.flag === e.target.value));
    };

    return (
        <div className={`${styles.bar} ${mode === "light" ? styles.light : ""}`}>
            <CgDarkMode className={styles["dark-icon"]} onClick={() => onMode()} style={{ color: mode === "dark" ? "#fff" : "var(--main-color)" }}/>
            <div className={styles.actions}>
                <div>
                    <label htmlFor="filter">
                        <span>Filter:</span>
                        <select name="flags" id="flags" onChange={handleFilter}>
                            <option value="all">All</option>
                            <option value="red">Red</option>
                            <option value="yellow">Yellow</option>
                            <option value="purple">Purple</option>
                        </select>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default ActionBar;