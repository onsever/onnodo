import React, { useContext, useState } from 'react';
import styles from "./Home.module.css";
import Task from "../../components/task/Task";
import {TaskContext} from "../../context/TaskContext";
import ActionBar from "../../components/actionbar/ActionBar";
import EmptyContainer from "../../components/emptycontainer/EmptyContainer";

function Home(props) {
    const { tasks, deleteTask, updateCompleted, changeMode, theme } = useContext(TaskContext);
    const [filteredTasks, setFilteredTasks] = useState(null);

    const handleFilter = (arr) => {
        setFilteredTasks(arr);
    }

    const handleMode = () => {
        changeMode(theme.mode === "dark" ? "light" : "dark");
    }

    return (
        <div className={styles.main}>
            <ActionBar tasks={tasks} onFilter={handleFilter} onMode={handleMode} mode={theme.mode} />
            {tasks.length === 0 ? <EmptyContainer /> : <></>}
            <div className={styles.container}>
                {filteredTasks ? filteredTasks.map((task) => {
                    return <Task key={task.id} {...task} onDelete={deleteTask} onCompleted={updateCompleted} mode={theme.mode} />
                }).sort((a, b) => new Date(a.date) - new Date(b.date)) : tasks.map(task => <Task key={task.id} {...task} onDelete={deleteTask} onCompleted={updateCompleted} mode={theme.mode} />).sort((a, b) => new Date(a.date) - new Date(b.date))}
            </div>
        </div>
    );
}

export default Home;

// TODO: 2) Implementation of the editing.
// TODO: 3) Implementation of the drag-and-drop system. Create an empty container for the completed tasks under the Home.js to display the completed tasks.
