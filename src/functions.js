import {Alert} from 'react-native';

export const handleSignInErrors = (error) => {
  switch (error.code) {
    case 'auth/invalid-email':
      Alert.alert("Chat'o", 'That email address is invalid!');
      break;
    case 'auth/user-disabled':
      Alert.alert("Chat'o", 'That email address has been disabled.');
      break;
    case 'auth/user-not-found':
      Alert.alert(
        "Chat'o",
        'There is no user corresponding to the given email address',
      );
      break;
    case 'auth/wrong-password':
      Alert.alert(
        "Chat'o",
        'The password is invalid for the given email address',
      );
      break;
    default:
      Alert.alert("Chat'o", error.code);
      break;
  }
};

export const handleSignUpErrors = (error) => {
  switch (error.code) {
    case 'auth/email-already-in-use':
      Alert.alert("Chat'o", 'That email address is already in use!');
      break;
    case 'auth/invalid-email':
      Alert.alert("Chat'o", 'That email address is invalid!');
      break;
    case 'auth/operation-not-allowed':
      Alert.alert("Chat'o", 'That email/password account is not enabled.');
      break;
    case 'auth/weak-password':
      Alert.alert("Chat'o", 'Password is not strong enough.');
      break;
    default:
      Alert.alert("Chat'o", error.code);
      break;
  }
};
