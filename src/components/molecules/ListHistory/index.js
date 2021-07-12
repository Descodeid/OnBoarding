import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {Number} from '..';
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
  time,
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
  } else {
    return (
      <View style={styles.containerHistory}>
        <View style={styles.wrapper}>
          <IcPaypasTransfer />
          <Gap width={16} />
          <View>
            <Text style={styles.name}>{product}</Text>
            <Text style={styles.description}>
              {date} <Text style={styles.dot}>.</Text> {time}
            </Text>
          </View>
        </View>
        <Number number={6000} style={styles.price} />
      </View>
    );
  }
};

export default ListHistory;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalize(8),
    paddingBottom: normalize(12),
    marginBottom: normalize(16),
    borderBottomWidth: 0.5,
    borderBottomColor: colors.c9,
  },
  containerHistory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  price: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(14),
    color: colors.c6,
  },
});
