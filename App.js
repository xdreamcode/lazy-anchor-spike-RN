import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import LazyExample from "./LazyExample";
import Example from "./Example";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is an example with FlatList and anchor feature</Text>
        <Button
          title="Example"
          onPress={() => this.props.navigation.push("Example")}
        />
        <Button
          title="Lazy Example"
          onPress={() => this.props.navigation.push("LazyExample")}
        />
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

const AppNavigator = createStackNavigator({
  App: {
    screen: App
  },
  LazyExample: {
    screen: LazyExample
  },
  Example: {
    screen: Example
  }
});

export default createAppContainer(AppNavigator);
