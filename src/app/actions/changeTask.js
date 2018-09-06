export const changeTask = (taskId, taskTitle) => ({
  type: 'CHANGE_TASK',
  payload: { id: taskId, title: taskTitle }
});
