import * as React from 'react';
import {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SignIn, SignUp, Timeline} from './pages';
import auth from '@react-native-firebase/auth';

const Stack = createStackNavigator();

export default function App() {

  const [hasSession, setSession] = useState(false);

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      setSession(user);
    });
  }, []);

  // const [isSignedIn, setIsSignedIn] = useState('');

  // useEffect(() => {
  //   auth().onAuthStateChanged((user) => {
  //     user
  //       ? user.metadata.creationTime !== user.metadata.lastSignInTime
  //         ? setIsSignedIn(user)
  //         : null
  //       : null;

  //     console.log(user);
  //   });
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {hasSession ? (
          <Stack.Screen name="TimelinePage" component={Timeline} />
        ) : (
          <>
            <Stack.Screen name="SignInPage" component={SignIn} />
            <Stack.Screen name="SignUpPage" component={SignUp} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
