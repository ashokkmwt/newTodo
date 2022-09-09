import React, { useState } from 'react'
import styles from './index.module.css'
import { useDispatch } from 'react-redux';
import { removeTaskAction, updateTaskAction } from '../../redux/actions/taskActions';

export default function Rendering(props) {
    const [newTask, setNewTask] = useState(props.data.task)
    const [readonly, setReadonly] = useState(true);

    const dispatch = useDispatch();
    const updateTask = () => {
        if (props.data.task !== newTask && !readonly) {
            const data = {
                oldData: props.data.task,
                newData: newTask
            }
            dispatch(updateTaskAction(data));
        }

        setReadonly(!readonly);
    }

    const handleTask = (e) => setNewTask(e.target.value)

    const deleteTask = () => dispatch(removeTaskAction(props.data.id));

    return (
        <div className={styles.task}>
            <input onChange={handleTask} type="text" className={styles.updateTaskInput} value={newTask} readOnly={readonly} />
            <div className={styles.btnBar}>
                <button onClick={updateTask} className={styles.btn}>{readonly ? "Edit" : "Save"}</button>
                <button onClick={deleteTask} className={styles.btn}>Delete</button>
            </div>
        </div>
    )
}
