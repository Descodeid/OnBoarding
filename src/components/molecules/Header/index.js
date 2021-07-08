import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from 'react-native-normalize';
import {BackgroundHeader, IcArrowLeftDark} from '../../../assets';
import {colors} from '../../../utils';
import {Gap} from '../../atoms';

const Header = ({text, icon, detail}) => {
  const navigation = useNavigation();
  if (detail) {
    return (
      <View>
        <View style={styles.container}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}>
            <IcArrowLeftDark />
          </TouchableOpacity>
          <Gap width={16} />
          <Text style={styles.text}>{text}</Text>
        </View>
        <View style={styles.logo}>{icon}</View>
        <Image source={BackgroundHeader} style={styles.background} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <IcArrowLeftDark />
        </TouchableOpacity>
        <Gap width={16} />
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: normalize(40),
    paddingHorizontal: normalize(15),
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(16),
    color: colors.c6,
  },
  background: {
    width: '100%',
    height: normalize(54.5),
  },
  logo: {
    paddingTop: normalize(16),
    paddingHorizontal: normalize(50),
  },
});
