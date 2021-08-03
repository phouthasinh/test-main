import React, { Component } from "react";
import { Text, View } from "react-native";
import { Header } from "react-native-elements";
export default class ShoppingPage extends Component {
  render() {
    return (
      <View>
        <Header
          containerStyle={{
            backgroundColor: "#fd641e",
          }}
          centerComponent={{ text: "ShoppingPage", style: { color: "#fff" } }}
        />
      </View>
    );
  }
}
