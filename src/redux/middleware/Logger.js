const logger = (store) => (next) => (action) => {
    // 1st step
    const currentState = store.getState();
    console.log("current state =>", currentState);
    console.log("Action dispatched => ", action);

    // 2nd step
    next(action);
    console.log("Updated state => ", store.getState());
} 

export default logger;