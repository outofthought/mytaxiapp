export default store => next => action => {
    console.log("BEFORE", store.getState());
    console.log(action.payload);
  
    next(action);
    console.log("AFTER", store.getState());
  };