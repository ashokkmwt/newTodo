import { ADD_TASK, UPDATE_TASK, REMOVE_TASK } from "../actions/types";


const initialState = []

const taskReducer = (state = initialState, action) => {

    let newState = [...state];

    switch (action.type) {
        case ADD_TASK:
            return [...state, action.payload]

        case UPDATE_TASK:
            const index = newState.findIndex(data => data === action.payload.oldData)
            newState[index] = action.payload.newData
            return newState

        case REMOVE_TASK:
            newState = newState.filter(taskObj => taskObj.id !== action.payload)
            return newState;
        default:
            return state
    }
}

export default taskReducer;