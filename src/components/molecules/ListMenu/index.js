import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from 'react-native-normalize';
import {IcArrowRight} from '../../../assets';
import {colors} from '../../../utils';

const ListMenu = ({text, icon, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={onPress}>
      {icon}
      <View style={styles.row}>
        <Text style={styles.text}>{text}</Text>
        <IcArrowRight />
      </View>
    </TouchableOpacity>
  );
};

export default ListMenu;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: normalize(15),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: normalize(21),
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: normalize(16),
    paddingRight: normalize(16),
    paddingVertical: normalize(15),
    borderBottomWidth: 1,
    borderBottomColor: colors.c9,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.black,
  },
});
