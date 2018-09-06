const initialState = [
  { id: 0, title: 'Task0', done: false },
  { id: 1, title: 'Task1', done: false },
  { id: 2, title: 'Task2', done: false }
];

const reducer = (state = initialState, action) => {
  if (action.type === 'ADD_TASK' && !state.map(item => item.title).includes(action.payload)) {
    const newId = state.length ? state[state.length - 1].id + 1 : 0;

    return [...state, { id: newId, title: action.payload, done: false }];
  } else if (action.type === 'DELETE_TASK') {
    const index = state.findIndex(item => item.id === action.payload);
    const newState = state.slice(0, index).concat(state.slice(index + 1));

    return newState;
  } else if (action.type === 'CHANGE_TASK_STATUS') {
    const newState = state.map(item => (item.id === action.payload ? { ...item, done: !item.done } : { ...item }));

    return newState;
  } else if (action.type === 'CHANGE_TASK') {
    const newState = state.map(
      item => (item.id === action.payload.id ? { ...item, title: action.payload.title } : { ...item })
    );

    return newState;
  }
  return state;
};

export default reducer;
