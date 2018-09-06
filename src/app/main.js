import React from "react";
import { View } from "react-native";

import { AddTaskBar, TasksList } from "./components";

const Main = () => (
  <View>
    <AddTaskBar />
    <TasksList />
  </View>
);

export default Main;
