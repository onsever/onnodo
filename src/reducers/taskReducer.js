export const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [...state, action.payload];
        case "DELETE_TASK":
            return state.filter((task) => task.id !== action.payload);
        case "SET_COMPLETED":
            const tempArray = [...state];
            const index = tempArray.findIndex(task => task.id === action.payload.id);
            tempArray[index].completed = !tempArray[index].completed;
            return tempArray;
        default:
            return state;
    }
}