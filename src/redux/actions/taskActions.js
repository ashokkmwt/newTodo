import { ADD_TASK, UPDATE_TASK, REMOVE_TASK } from "./types";


const addTaskAction = (data) => {
    return {
        type: ADD_TASK,
        payload: data
    }
}

const updateTaskAction = (data) => {
    return {
        type: UPDATE_TASK,
        payload: data
    }
}

const removeTaskAction = (data) => {
    // here data is an id of task
    return {
        type: REMOVE_TASK,
        payload: data 
    }
}

export { addTaskAction, updateTaskAction, removeTaskAction }