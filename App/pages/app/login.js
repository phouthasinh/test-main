import React, { Component } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Input, Button, Divider } from "react-native-elements";
import { LinearGradient } from "expo-linear-gradient";
export default class LoginPage extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <ScrollView>
          <Text
            style={{
              fontSize: 20,
              alignSelf: "center",
              padding: 10,
            }}
          >
            Login
          </Text>
          <Input
            style={{ fontSize: 14, marginLeft: 10 }}
            inputContainerStyle={{
              borderWidth: 1,
              borderColor: "#ABB2B9",
              alignItems: "stretch",
              paddingHorizontal: 0,
              borderRadius: 10,
              height: 47,
            }}
            labelStyle={{ fontSize: 14 }}
            placeholder="Phone Number (8 number)"
          />
          <Input
            style={{ fontSize: 14, marginLeft: 10 }}
            inputContainerStyle={{
              borderWidth: 1,
              borderColor: "#ABB2B9",
              alignItems: "stretch",
              paddingHorizontal: 0,
              borderRadius: 10,
            }}
            labelStyle={{ fontSize: 14 }}
            placeholder="Password"
            secureTextEntry={true}
            rightIcon={
              <Icon
                color="#ABB2B9"
                name="eye"
                size={16}
                style={{ marginRight: 5 }}
              />
            }
          />
          <Text
            style={{
              fontSize: 12,
              alignSelf: "flex-end",
              paddingRight: 10,
              color: "red",
            }}
          >
            forgot password ?
          </Text>
          <LinearGradient
            colors={["red", "yellow"]}
            start={{
              x: 0,
              y: 0,
            }}
            end={{
              x: 1.3,
              y: 1,
            }}
            style={styles.button}
          >
            <TouchableOpacity>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </LinearGradient>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingLeft: 10,
              paddingRight: 10,
            }}
          >
            <View style={{ flex: 1, height: 1, backgroundColor: "#ABB2B9" }} />
            <View>
              <Text style={{ padding: 10, color: "#ABB2B9" }}>
                Quickly login with
              </Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: "#ABB2B9" }} />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              padding: 20,
            }}
          >
            <Text
              style={{
                fontSize: 12,

                paddingRight: 10,
              }}
            >
              Not a member ?
            </Text>
            <Text
              style={{
                fontSize: 12,
                paddingRight: 10,
                color: "red",
              }}
            >
              Register
            </Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },
  box: {
    width: "100%",
    height: 200,
  },
  button: {
    marginTop: 20,
    marginHorizontal: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
    padding: 14,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
});
