import React from "react";
import { StyleSheet, Text, View, FlatList, Button } from "react-native";

export default class LazyExample extends React.Component {
  getColor = number => {
    if (number < 100) return "red";
    if (number < 200) return "green";
    if (number < 300) return "blue";
    if (number < 400) return "yellow";
    if (number < 500) return "gray";
  };

  initial = {
    data: [...Array(500).keys()].map(i => ({
      key: String(i),
      text: `Random text ${i}`,
      color: this.getColor(i)
    }))
  };

  state = this.initial;

  goTo = index => {
    this.setState({ data: this.initial.data.slice(0, index + 13) }, () =>
      this.flatListRef.scrollToIndex({
        animated: true,
        index
      })
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button
          title="0"
          onPress={() =>
            this.flatListRef.scrollToIndex({
              animated: true,
              index: 0
            })
          }
        />
        <Button title="100" onPress={() => this.goTo(100)} />
        <Button title="200" onPress={() => this.goTo(200)} />
        <Button title="300" onPress={() => this.goTo(300)} />
        <Button title="400" onPress={() => this.goTo(400)} />

        <FlatList
          ref={ref => {
            this.flatListRef = ref;
          }}
          getItemLayout={(data, index) => ({
            length: 40,
            offset: 40 * index,
            index
          })}
          onEndReachedThreshold={0.1}
          onEndReached={() =>
            alert("Not implemented yet: Fetch more from local state")
          }
          initialNumToRender={20}
          style={{ flex: 1, marginBottom: 20 }}
          data={this.state.data}
          renderItem={({ item }) => (
            <View
              style={{
                height: 40,
                borderRadius: 10,
                borderWidth: 1,
                padding: 10,
                borderColor: item.color
              }}
            >
              <Text>{item.text}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}
