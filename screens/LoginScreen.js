import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/Formbutton';
import { AuthenticationContext } from "../authentication/authentication.context";
import { alignItems } from 'styled-system';
const LoginScreen = ({navigation}) => {
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { onLogin, error } = useContext(AuthenticationContext);

  return (
    <ScrollView>
    
    <View Style={styles.container}>
      
      
      <Text style={styles.text}>Bus Tracking App</Text>
      

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
       {error && (
          <View size="large" >
            <Text style= {styles.errorContainer} >{error}</Text>
          </View>
         
        )}
      <FormButton
        buttonTitle="Sign In"
        onPress={() => onLogin(email, password)}
      />
      
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>

    </View>
    </ScrollView>
  )};
      

export default LoginScreen;

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:50,
    padding:20,
    
  },
  
  text: {
    //fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 20,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
   marginTop:50,
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    //fontFamily: 'Lato-Regular',
  },
  errorContainer:{
  width:300,
  flex:1,
  fontSize:18,
  color:"red",
  marginTop:16,
  marginBottom:16,
  marginLeft:25,
  },
});