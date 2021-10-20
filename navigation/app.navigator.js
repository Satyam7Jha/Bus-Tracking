import React from "react";
import { Text, View } from "react-native";
import { Ionicons, FontAwesome5, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import Sidebar from "../screens/Sidebar";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen() {
      return (
       
        <Drawer.Navigator drawerContent={props => <Sidebar {...props} />} >
          <Drawer.Screen name="Home" component={Home} options={{ drawerIcon: config => <AntDesign name="home" size={20} color="black" onPress={() => alert("Home Under Construction !!")} /> }} />
          <Drawer.Screen name="Profile" component={Home} options={{ drawerIcon: config => <SimpleLineIcons name="people" size={20} color="black" onPress={() => alert("Profile Under Construction !!")} /> }} />
          <Drawer.Screen name="Add Bus" component={Home} options={{ drawerIcon: config => <Ionicons name="md-bus-outline" size={20} color="black" onPress={() => alert("AddBus Under Construction !!")} /> }} />
          <Drawer.Screen name="Settings" component={Home} options={{ drawerIcon: config => <Ionicons name="md-settings-outline" size={20} color="black" onPress={() => alert("Setting Under Construction !!")} /> }} />
          <Drawer.Screen name="Support" component={Home} options={{ drawerIcon: config => <AntDesign name="customerservice" size={20} color="black" onPress={() => alert("Support Under Construction !!")} /> }} />
          <Drawer.Screen name="Donate" component={Home} options={{ drawerIcon: config => <FontAwesome5 name="donate" size={20} color="black" onPress={() => alert("Donate Under Construction !!")} /> }} />
        </Drawer.Navigator>
      );
    }

export const AppNavigator = () => (
  <Stack.Navigator >
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);