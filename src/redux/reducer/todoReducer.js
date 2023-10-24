const initialState = {
  tasks: [
    {
      id: "gyfuf",
      title: "task1",
      isDone: false,
    },
    {
      id: "gyfhh",
      title: "task2",
      isDone: false,
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  return state;
};

export default todoReducer;
