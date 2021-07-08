import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from 'react-native-normalize';
import {IcArrowLeftWhite} from '../../../assets';
import {colors} from '../../../utils';
import {Gap} from '../../atoms';
import {useNavigation} from '@react-navigation/native';

const SecondHeader = ({text}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <IcArrowLeftWhite />
      </TouchableOpacity>
      <Gap width={16} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default SecondHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.c1,
    flexDirection: 'row',
    paddingHorizontal: normalize(15),
    paddingTop: normalize(40),
    paddingBottom: normalize(16),
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(16),
    color: colors.c3,
  },
});
