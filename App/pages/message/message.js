import React, { Component } from "react";
import { Text, View } from "react-native";
import { Header } from "react-native-elements";
export default class MessagePage extends Component {
  render() {
    return (
      <View>
        <Header
          containerStyle={{
            backgroundColor: "#fd641e",
          }}
          centerComponent={{ text: "MessagePage", style: { color: "#fff" } }}
        />
      </View>
    );
  }
}
