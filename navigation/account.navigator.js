import React from "react";
import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import  Welcome  from "../screens/Welcome";
import  LoginScreen  from "../screens/LoginScreen";
import SignupScreen  from "../screens/SignupScreen";
import SignupStudent  from "../screens/SignupStudent";

const Stack = createStackNavigator();

export const AccountNavigator = () => (
  <Stack.Navigator >
    <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="SignupStudent" component={SignupStudent} />
  </Stack.Navigator>
);

