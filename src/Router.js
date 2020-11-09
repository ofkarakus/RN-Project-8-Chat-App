import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { SignIn, SignUp, Timeline } from './pages';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignInPage" component={SignIn} />
        <Stack.Screen name="SignUpPage" component={SignUp} />
        <Stack.Screen name="TimelinePage" component={Timeline} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
