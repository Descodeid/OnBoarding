import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from 'react-native-normalize';
import {IcArrowRight} from '../../../assets';
import {colors} from '../../../utils';
import {Gap} from '../../atoms';

const ListProfile = ({text, icon, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}>
      <View style={styles.row}>
        {icon}
        <Gap width={16} />
        <Text style={styles.text}>{text}</Text>
      </View>
      <IcArrowRight />
    </TouchableOpacity>
  );
};

export default ListProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: normalize(16),
    marginBottom: normalize(13),
    marginHorizontal: normalize(24),
    borderBottomWidth: 1,
    borderBottomColor: colors.c9,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(14),
    color: colors.c6,
  },
});
