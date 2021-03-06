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




const LoginScreen = ({navigation}) => {
  
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  

  return (
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
      <FormButton
        buttonTitle="Sign In"
        onPress={() => navigation.navigate('HomeScreen')}
      />
      
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('SignupScreen')}>
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>

      </View>
  )};
      

export default LoginScreen;

const styles = StyleSheet.create({
  
  container: {
    flex :1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
    
  },
  // logo: {
  //   height: 150,
  //   width: 150,
  //   resizeMode: 'cover',
  //   justifyContent: 'center',

  // },
  text: {
    //fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
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
});