import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Logo} from '../../assets';
import {colors} from '../../utils';
import normalize from 'react-native-normalize';
import {Gap} from '../../components';

const SplashScreen = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnBoarding');
    }, 3000);
  }, []);
  return (
    <View style={styles.page}>
      <Image source={Logo} style={styles.logo} />
      <Gap height={32} />
      <Text style={styles.appName}>Paypas</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.c1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: normalize(130),
    height: normalize(210),
  },
  appName: {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(32),
    color: colors.c3,
    lineHeight: normalize(48),
  },
});
