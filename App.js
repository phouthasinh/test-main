import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./App/component/tabs/bottomTabs";
import LoginPage from "./App/pages/app/login";
import RegisterPage from "./App/pages/app/register";
import Icon from "react-native-vector-icons/FontAwesome";
import { Button } from "react-native-elements";

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    const { route, navigation } = this.props;
    return (
      <SafeAreaProvider>
        <StatusBar backgroundColor="#ffffff" />
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{
                headerShown: false,
              }}
              name="HomePage"
              component={BottomTabs}
            />
            <Stack.Screen
              options={({ navigation, route }) => ({
                headerTitle: "",
                headerLeft: (props) => (
                  <Button
                    onPress={() => navigation.goBack()}
                    type="clear"
                    icon={<Icon name="arrow-left" size={20} />}
                  />
                ),
              })}
              name="LoginPage"
              component={LoginPage}
            />
            <Stack.Screen
              options={({ navigation, route }) => ({
                headerTitle: "",
                headerLeft: (props) => (
                  <Button
                    onPress={() => navigation.goBack()}
                    type="clear"
                    icon={<Icon name="arrow-left" size={20} />}
                  />
                ),
              })}
              name="RegisterPage"
              component={RegisterPage}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
}
