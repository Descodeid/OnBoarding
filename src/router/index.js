import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {BottomNavigation} from '../components';
import {
  SplashScreen,
  OnBoarding,
  SignIn,
  SignUp,
  OTP,
  Home,
  QRIS,
  Profile,
  Lainnya,
  Pulsa,
  PaketData,
  PLN,
  TagihanListrik,
  TokenListrik,
  Internet,
  DetailInternet,
  BPJS,
  Transfer,
  TransferToBank,
  Security,
  TopUp,
  MetodePembayaran,
  TopUpSuccess,
  TransferToUser,
  History,
  InfoToko,
  PaymentSuccess,
  EditProfile,
  Privacy,
  Company,
} from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigation {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="QRIS"
        component={QRIS}
        options={() => {
          return {
            tabBarVisible: false,
          };
        }}
      />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnBoarding"
        component={OnBoarding}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen name="OTP" component={OTP} options={{headerShown: false}} />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Lainnya"
        component={Lainnya}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pulsa"
        component={Pulsa}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaketData"
        component={PaketData}
        options={{headerShown: false}}
      />
      <Stack.Screen name="PLN" component={PLN} options={{headerShown: false}} />
      <Stack.Screen
        name="TagihanListrik"
        component={TagihanListrik}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TokenListrik"
        component={TokenListrik}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Internet"
        component={Internet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailInternet"
        component={DetailInternet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BPJS"
        component={BPJS}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Transfer"
        component={Transfer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransferToBank"
        component={TransferToBank}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransferToUser"
        component={TransferToUser}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Security"
        component={Security}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TopUp"
        component={TopUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MetodePembayaran"
        component={MetodePembayaran}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TopUpSuccess"
        component={TopUpSuccess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="History"
        component={History}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InfoToko"
        component={InfoToko}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="PaymentSuccess"
        component={PaymentSuccess}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Privacy"
        component={Privacy}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Company"
        component={Company}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;
