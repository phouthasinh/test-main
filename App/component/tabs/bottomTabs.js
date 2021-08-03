import React, { Component } from "react";

import Icon from "react-native-vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { menus } from "../../core/route";
import { Provider } from "react-redux";
import  configureStore  from "../../redux/configureStore.js";

const Tab = createBottomTabNavigator();

const store = configureStore();
export default class BottomTabs extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainTabs />
      </Provider>
    );
  }
}

// loop menu tabs
function MainTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "lightgray",
        activeBackgroundColor: "#d25300ed",
        inactiveBackgroundColor: "#f16b24",

        style: {
          backgroundColor: "#f16b24",
        },
      }}
    >
      {menus.map((item, key) => {
        return (
          <Tab.Screen
            key={key}
            name={item.route.toString()}
            options={{
              showLabel: false,
              tabBarLabel: item.label,
              tabBarIcon: ({ color }) => (
                <Icon name={item.icon} color={color} size={22} />
              ),
            }}
            component={item.route}
          />
        );
      })}
    </Tab.Navigator>
  );
}
