import React from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { connect } from "react-redux";

import { addTask } from "../actions";

class AddTaskBarComponent extends React.Component {
  handleKeyPress = e => {
    if (e.key == "Enter" && this.taskInput.value !== "") {
      this.props.onAddTask(this.taskInput.value);
      this.taskInput.value = "";
    }
  };

  handleAddClick = () => {
    if (this.taskInput.value !== "") {
      this.props.onAddTask(this.taskInput.value);
      this.taskInput.value = "";
    }
  };

  render() {
    return (
      <View>
        <TextInput
          className="form-control"
          type="text"
          placeholder="Enter new task"
          onKeyPress={this.handleKeyPress}
          ref={node => {
            this.taskInput = node;
          }}
        />
        <Button
          className="btn btn-success"
          type="button"
          onClick={this.handleAddClick}
        >
      </View>
    );
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
  onAddTask: taskTitle => {
    dispatch(addTask(taskTitle));
  }
});

export const AddTaskBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTaskBarComponent);
