import React from 'react'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { connect } from 'react-redux'

import { deleteTask, changeTaskStatus, changeTask } from '../actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  button: {
    width: '20%'
  },
  text: {
    width: '60%'
  }
})

class TaskComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: true,
      title: props.title
    }
  }

  // componentDidMount() {
  //   this.taskInputGroup.addEventListener('dblclick', e => {
  //     e.preventDefault()
  //   })
  //   this.taskInput.addEventListener('dblclick', e => {
  //     e.preventDefault()
  //   })
  // }

  handleCheckClick = () => {
    this.props.onChangeTaskStatus(this.props.id)
  }

  handleDeleteClick = () => {
    this.props.onDeleteTask(this.props.id)
  }

  // handleDoubleClick = () => {
  //   this.setState({ disabled: false })
  // }

  // handleChange = () => {
  //   this.setState({ title: this.taskInput.value })
  // }

  // handleKeyPress = e => {
  //   if (e.key == 'Enter') {
  //     this.props.onChangeTask(this.props.id, this.taskInput.value)
  //     this.setState({ disabled: true })
  //   }
  // }

  // handleBlur = () => {
  //   this.props.onChangeTask(this.props.id, this.taskInput.value)
  //   this.setState({ disabled: true })
  // }

  render() {
    return (
      <View style={styles.container}>
        <Button
          style={styles.button}
          title={this.props.done ? 'v' : '-'}
          onPress={() => {
            this.props.onChangeTaskStatus(this.props.id)
          }}
        />
        <Text style={styles.text}>{this.props.title}</Text>
        <Button
          style={styles.button}
          title="Del"
          onPress={() => {
            this.props.onDeleteTask(this.props.id)
          }}
        />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
  onDeleteTask: taskId => {
    dispatch(deleteTask(taskId))
  },
  onChangeTaskStatus: taskId => {
    dispatch(changeTaskStatus(taskId))
  },
  onChangeTask: (taskId, taskTitle) => {
    dispatch(changeTask(taskId, taskTitle))
  }
})

export const Task = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskComponent)
