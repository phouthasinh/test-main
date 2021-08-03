import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Header, Avatar, Button, Icon } from "react-native-elements";

export default class ProfilePage extends Component {
  render() {
    const { route, navigation } = this.props;
    return (
      <View>
        <Header
          statusBarProps={{ barStyle: "light-content" }}
          backgroundColor="#fd5f35"
          containerStyle={{
            height: 200,
            overflow: "hidden",
          }}
          placement="left"
          leftComponent={
            <View style={{ flexDirection: "column", paddingTop: 40 }}>
              <View
                style={{
                  top: -60,
                  left: -50,
                  backgroundColor: "#ff3e06",
                  position: "absolute",
                  width: 230,
                  height: 230,

                  borderRadius: 130,
                }}
              />
              <View style={{ flexDirection: "row", borderRadius: 100 }}>
                <Avatar
                  containerStyle={{
                    height: 100,
                    width: 100,
                  }}
                  size="xlarge"
                  title="SV"
                  rounded
                  source={{
                    uri: "https://image.flaticon.com/icons/png/512/149/149071.png",
                  }}
                />
              </View>
            </View>
          }
          centerComponent={
            <View>
              <View
                style={{
                  top: 15,
                  left: 80,
                  backgroundColor: "#fd7253",
                  position: "absolute",
                  width: 180,
                  height: 180,
                  borderRadius: 100,
                }}
              />
              <View
                style={{
                  top: -130,
                  left: 100,
                  backgroundColor: "#fd6e34b0",
                  position: "absolute",
                  width: 180,
                  height: 180,
                  borderRadius: 100,
                }}
              />
            </View>
          }
          rightComponent={
            <View
              style={{
                flexDirection: "row",
                paddingTop: 70,
                marginRight: 10,
              }}
            >
              <Button
                buttonStyle={{
                  backgroundColor: "white",
                  borderRadius: 10,
                  width: 100,
                }}
                titleStyle={{ color: "#fd6e34" }}
                title="Login"
                onPress={() => navigation.navigate("LoginPage")}
              />
              <Button
                type="outline"
                buttonStyle={{
                  borderColor: "white",
                  borderRadius: 10,
                  marginLeft: 10,
                  paddingRight: 10,
                }}
                titleStyle={{ color: "white" }}
                title="Register"
                onPress={() => navigation.navigate("RegisterPage")}
              />
            </View>
          }
        />
      </View>
    );
  }
}
