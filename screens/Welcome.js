import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { Button } from 'react-native-paper';


export default function Welcome({ navigation }) {
  
  return (
    
       
       <ImageBackground source={require('../assets/Background.jpg')} resizeMode="cover" style={styles.image}>
       <View style={styles.container}>
      
       <View style={{  marginBottom: 10 }}>
       <Button  mode="contained" color="#0000b3" onPress={() => navigation.navigate('LoginScreen')}>
          Login
        </Button>
        </View>
    
    <View style={{  marginBottom: 10 }}>
      <Button   color="#0000b3" mode="contained" onPress={() =>navigation.navigate('SignupScreen') }>
              Signup
      </Button>
      </View>  
      
       <View style={{  marginBottom: 10 }}>  
          <Button  mode="contained" color="#0000b3" onPress={() => navigation.navigate('SignupStudent')}>
              Student SignUp
      </Button>
      </View>
 </View>
     
      </ImageBackground>
   
  
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  image: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
    height: '100%',
    opacity:0.8,
  },
  
});
