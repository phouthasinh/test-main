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
export default class RegisterPage extends Component {
  render() {
    return (
      <View style={{ backgroundColor: "white", flex: 1 }}>
        <ScrollView>
          <Text
            style={{
              fontSize: 20,
              alignSelf: "center",
              padding: 20,
            }}
          >
            Register
          </Text>

          <InputCustom></InputCustom>

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
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </LinearGradient>
        </ScrollView>
      </View>
    );
  }
}

const dataInput = [
  {
    icon: "user-o",
    placeholder: "Name",
  },
  {
    icon: "envelope-o",
    placeholder: "Email (optional)",
  },
  {
    icon: "phone",
    placeholder: "+85620 - Phone Number",
  },
  {
    icon: "venus-mars",
    placeholder: "Gender",
  },
  {
    icon: "calendar",
    placeholder: "birthday",
  },
  {
    icon: "unlock-alt",
    placeholder: "password",
  },
  {
    icon: "lock",
    placeholder: "confirm password",
  },
];

function InputCustom() {
  return dataInput.map((index, key) => {
    return (
      <Input
        key={key}
        style={{ fontSize: 14, marginLeft: 5 }}
        leftIcon={
          <Icon
            color="#ABB2B9"
            name={index.icon}
            size={16}
            style={{ marginLeft: 13 }}
          />
        }
        inputContainerStyle={{
          borderWidth: 1,
          borderColor: "#ABB2B9",
          alignItems: "stretch",
          paddingHorizontal: 0,
          borderRadius: 10,
        }}
        labelStyle={{ fontSize: 14 }}
        placeholder={index.placeholder}
      />
    );
  });
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
