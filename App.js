// import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import Home from "./screens/Home";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Sidebar from "./screens/Sidebar";
import { Ionicons, FontAwesome5, SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import SignupStudent from './screens/SignupStudent';
import Welcome from './screens/Welcome';


const Stack = createStackNavigator();

function HomeScreen() {
  return (
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Home />
    // </View>
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


function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignupScreen" component={SignupScreen} />
      <Stack.Screen name="SignupStudent" component={SignupStudent} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />

    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  console.log("App executed");

  return (

    <NavigationContainer>

      {/* <Drawer.Navigator drawercontent={props => <Drawerr {...props} />} >
        <Drawer.Screen name="Home" component={HomeScreen} options={{ drawerIcon: config => <AntDesign name="home" size={20} color="black" onPress={() => alert("Home Under Construction !!")} /> }} />
        <Drawer.Screen name="Profile" component={HomeScreen} options={{ drawerIcon: config => <SimpleLineIcons name="people" size={20} color="black" onPress={() => alert("Profile Under Construction !!")} /> }} />
        <Drawer.Screen name="Add Bus" component={HomeScreen} options={{ drawerIcon: config => <Ionicons name="md-bus-outline" size={20} color="black" onPress={() => alert("AddBus Under Construction !!")} /> }} />
        <Drawer.Screen name="Settings" component={HomeScreen} options={{ drawerIcon: config => <Ionicons name="md-settings-outline" size={20} color="black" onPress={() => alert("Setting Under Construction !!")} /> }} />
        <Drawer.Screen name="Support" component={HomeScreen} options={{ drawerIcon: config => <AntDesign name="customerservice" size={20} color="black" onPress={() => alert("Support Under Construction !!")} /> }} />
        <Drawer.Screen name="Donate" component={HomeScreen} options={{ drawerIcon: config => <FontAwesome5 name="donate" size={20} color="black" onPress={() => alert("Donate Under Construction !!")} /> }} />
      </Drawer.Navigator> */}

      <MyStack />
    </NavigationContainer>




  );
}