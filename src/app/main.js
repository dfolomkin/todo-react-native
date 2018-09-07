import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { AddTaskBar, TasksList } from './components'

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#000',
    paddingTop: 26
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    padding: 20
  },
  header: {
    marginBottom: 40,
    fontSize: 24,
    textAlign: 'center'
  }
})

const Main = () => (
  <View style={styles.main}>
    <View style={styles.container}>
      <Text style={styles.header}>todo-react-native</Text>

      <AddTaskBar />
      <TasksList />
    </View>
  </View>
)

export default Main
