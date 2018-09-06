import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "./src/app/reducers";
import Main from "./src/app/main";

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>todo-react-native</Text>
        <Provider store={store}>
          <Main />
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
