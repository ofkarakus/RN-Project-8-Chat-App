import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, Alert} from 'react-native';
import {signin} from './styles';
import {Input, Button} from '../components';
import auth from '@react-native-firebase/auth';
import {handleSignInErrors} from '../functions';

const SignIn = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressSignIn = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account signed in!');
      })
      .catch(handleSignInErrors);
  };

  return (
    <SafeAreaView style={signin.container}>
      <View style={signin.header}>
        <Image source={require('../assets/chat.png')} style={signin.logo} />
        <Text style={signin.heading}>CHAT'O</Text>
      </View>

      <Input
        placeholder="Type email address.."
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      <Input
        placeholder="Type password.."
        secureTextEntry={true}
        onChangeText={setPassword}
      />

      <Button title="Sign In" onPress={onPressSignIn} />
      <Button
        title="Sign Up"
        noBorder
        onPress={() => {
          props.navigation.navigate('SignUpPage');
        }}
      />
    </SafeAreaView>
  );
};

export {SignIn};
