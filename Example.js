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

  state = {
    data: [...Array(500).keys()].map(i => ({
      key: String(i),
      text: `Random text ${i}`,
      color: this.getColor(i)
    }))
  };

  render() {
    console.log(this.state.data);

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
        <Button
          title="100"
          onPress={() =>
            this.flatListRef.scrollToIndex({
              animated: true,
              index: 100
            })
          }
        />
        <Button
          title="200"
          onPress={() =>
            this.flatListRef.scrollToIndex({
              animated: true,
              index: 200
            })
          }
        />
        <Button
          title="300"
          onPress={() =>
            this.flatListRef.scrollToIndex({
              animated: true,
              index: 300
            })
          }
        />
        <Button
          title="400"
          onPress={() =>
            this.flatListRef.scrollToIndex({
              animated: true,
              index: 400
            })
          }
        />

        <FlatList
          ref={ref => {
            this.flatListRef = ref;
          }}
          initialNumToRender={500}
          style={{ flex: 1, marginBottom: 20 }}
          data={this.state.data}
          renderItem={({ item }) => (
            <View
              style={{
                // backgroundColor: item.color,
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
