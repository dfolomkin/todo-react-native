import React from 'react'
import { Alert, Icon, StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-material-ui'
import { connect } from 'react-redux'

import { addTask } from '../actions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    height: 42
  }
})

class AddTaskBarComponent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  handleAddClick = () => {
    if (this.state.title !== '') {
      this.props.onAddTask(this.state.title)
      this.setState({ title: '' })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Enter new task"
          value={this.state.title}
          onChangeText={title => this.setState({ title: title })}
        />
        <Button raised primary icon="done" text="Add" onPress={this.handleAddClick} />
      </View>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
  onAddTask: taskTitle => {
    dispatch(addTask(taskTitle))
  }
})

export const AddTaskBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTaskBarComponent)
