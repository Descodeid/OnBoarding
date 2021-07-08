import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {IcBankTransfer, IcPaypasTransfer} from '../../../assets';
import {colors} from '../../../utils';
import {Gap} from '../../atoms';

const ListHistory = ({
  name,
  phone,
  bank,
  accountNumber,
  product,
  date,
  type,
}) => {
  if (type === 'transferBank') {
    return (
      <View style={styles.container}>
        <IcBankTransfer />
        <Gap width={16} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.description}>
            {bank} <Text style={styles.dot}>.</Text> {accountNumber}
          </Text>
        </View>
      </View>
    );
  } else if (type === 'transferPaypas') {
    return (
      <View style={styles.container}>
        <IcPaypasTransfer />
        <Gap width={16} />
        <Text style={styles.name}>{phone}</Text>
      </View>
    );
  }
};

export default ListHistory;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalize(8),
    paddingBottom: normalize(12),
    marginBottom: normalize(16),
    borderBottomWidth: 0.5,
    borderBottomColor: colors.c9,
  },
  name: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.c6,
  },
  dot: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(18),
    color: colors.c4,
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.c4,
  },
});
