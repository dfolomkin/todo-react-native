import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import { Task } from './task'

const TasksListComponent = ({ tasks }) => {
  const todoTasks = tasks.filter(obj => !obj.done).map(obj => <Task key={obj.id} {...obj} />)
  const doneTasks = tasks.filter(obj => obj.done).map(obj => <Task key={obj.id} {...obj} />)

  return (
    <View>
      {todoTasks.length > 0 ? <Text>To do!</Text> : null}
      {todoTasks}
      {doneTasks.length > 0 ? <Text>Done:</Text> : null}
      {doneTasks}
    </View>
  )
}

const mapStateToProps = state => ({
  tasks: state.tasks
})

export const TasksList = connect(mapStateToProps)(TasksListComponent)
