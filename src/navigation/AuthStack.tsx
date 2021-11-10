import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Signin, Signup} from 'app/screens';

const Stack = createStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
  );
}
