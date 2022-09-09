import React, { useState } from 'react'
import styles from './index.module.css'
import cx from 'classnames'
import Rendering from '../Rendering';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskAction } from '../../redux/actions/taskActions';

export default function Mytodo() {
    const [task, setTask] = useState("");
    const handleTask = (e) => {
        setTask(e.target.value);
    }
    const getTodos = useSelector(state => state.taskReducer);

    const dispatch = useDispatch();


    function generateId() {
        const id = Math.ceil(Math.random() * 10000000);
        return id;
    }

    const addTask = () => {
        setTask("");
        const id = generateId();
        const todo = {
            task: task,
            id: id
        }
        dispatch(addTaskAction(todo));
    }



    return (
        <div className={styles.taskParent}>
            <header>
                <input onChange={handleTask} value={task} className={styles.taskAddInput} placeholder='type here' />
                <button onClick={addTask} className={cx(styles.taskAddBtn, styles.btn)}>Add Task</button>
            </header><hr />
            <main>
                {getTodos.map((task, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Rendering data={task} key={index} />
                        </React.Fragment>
                    )
                })}
            </main>
        </div>
    )
}
