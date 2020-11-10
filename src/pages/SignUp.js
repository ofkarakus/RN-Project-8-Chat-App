import React, {useState} from 'react';
import {View, Text, SafeAreaView, Image, Alert} from 'react-native';
import {Input, Button} from '../components';
import {signup} from './styles';
import auth from '@react-native-firebase/auth';
import {handleSignUpErrors} from '../functions';

const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const onPressSignUp = () => {
    password === passwordConfirmation
      ? auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            Alert.alert(
              "Chat'o",
              'User account successfully created! \nPlease sign in to your account.',
            );
            props.navigation.navigate('SignInPage');
          })
          .catch(handleSignUpErrors)
      : Alert.alert("Chat'o", "Those passwords didn't match. Try again.");
  };

  return (
    <SafeAreaView style={signup.container}>
      <View style={signup.header}>
        <Image source={require('../assets/chat.png')} style={signup.logo} />
        <Text style={signup.heading}>CHAT'O</Text>
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
      <Input
        placeholder="Confirm password.."
        secureTextEntry={true}
        onChangeText={setPasswordConfirmation}
      />

      <Button title="Sign Up" noBorder onPress={onPressSignUp} />
    </SafeAreaView>
  );
};

export {SignUp};
