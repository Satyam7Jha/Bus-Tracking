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

// import {AuthContext} from '../navigation/AuthProvider';

const SignupScreen = ({navigation}) => {
  const [name, setname] = useState();
  
  const [phone, setphone] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [busRoute, setbusRoute] = useState();

  const [confirmPassword, setConfirmPassword] = useState();

  return (
    <ScrollView>
    <View style={styles.container}>

      <Text style={styles.text}>Create an account</Text>

       <FormInput
        labelValue={name}
        onChangeText={(name) => setname(name)}
        placeholderText="Name"
        iconType="smileo"
        keyboardType="default"
        autoCapitalize="none"
        autoCorrect={false}
      />
      
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
        labelValue={Number}
        onChangeText={(phone) => setphone(phone)}
        placeholderText="Phone no"
        iconType="phone"
        keyboardType="numeric"
        autoCapitalize="none"
        autoCorrect={false}
      />
       <FormInput
        labelValue={busRoute}
        onChangeText={(busRoute) => setbusRoute(busRoute)}
        placeholderText="Bus Route"
        iconType="find"
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

      <FormInput
        labelValue={confirmPassword}
        onChangeText={(userPassword) => setConfirmPassword(userPassword)}
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />

        <FormButton
        buttonTitle="Sign Up"
        onPress={() => navigation.navigate('HomeScreen')}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('LoginScreen')}>
        <Text style={styles.navButtonText}>Have an account? Sign In</Text>
      </TouchableOpacity>
    
    </View>
    </ScrollView>

  )};
      

export default SignupScreen;

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
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 3,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    //fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    //fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});