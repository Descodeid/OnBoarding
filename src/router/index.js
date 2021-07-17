import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {OnBoarding} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="OnBoarding">
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
