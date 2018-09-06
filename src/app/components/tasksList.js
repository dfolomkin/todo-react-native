import React from "react";
import { Text, View } from "react-native";
import { connect } from "react-redux";

// import { Task } from "./task";

const TasksListComponent = ({ tasks }) => {
  // const todoTasksArr = tasks.filter(obj => !obj.done);
  // const doneTasksArr = tasks.filter(obj => obj.done);
  // const todoTasks = todoTasksArr.map(obj => <Task key={obj.id} {...obj} />);
  // const doneTasks = doneTasksArr.map(obj => <Task key={obj.id} {...obj} />);

  return (
    // <div>
    //   {todoTasks.length > 0 ? <h3>To do!</h3> : null}
    //   <div className="form-group">{todoTasks}</div>
    //   {doneTasks.length > 0 ? <h3>Done:</h3> : null}
    //   <div className="form-group">{doneTasks}</div>
    // </div>
    <View>
      <Text>Task 1</Text>
      <Text>Task 2</Text>
      <Text>Task 3</Text>
      <Text>Task 4</Text>
    </View>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

export const TasksList = connect(mapStateToProps)(TasksListComponent);
