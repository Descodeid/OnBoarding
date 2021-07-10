import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from 'react-native-normalize';
import {ILBank, ILWallet} from '../../assets';
import {Gap, ListHistory, SecondHeader} from '../../components';
import {colors} from '../../utils';

const Transfer = ({navigation}) => {
  return (
    <View style={styles.page}>
      <SecondHeader text="Transfer" />
      <View style={styles.container}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.card}
          onPress={() => navigation.navigate('TransferToUser')}>
          <ILWallet />
          <Gap height={16} />
          <Text style={styles.label}>
            Ke sesama <Text style={styles.labelBlue}>Paypas</Text>
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.card}
          onPress={() => navigation.navigate('TransferToBank')}>
          <ILBank />
          <Gap height={16} />
          <Text style={styles.label}>Ke rekening bank</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.lastTransaction}>Transaksi Terakhir</Text>
        <Gap height={16} />
        <ListHistory
          type="transferBank"
          name="Ryan Aprianto"
          bank="Bank BCA"
          accountNumber={89875863}
        />
        <ListHistory type="transferPaypas" phone="0895547657" />
      </View>
    </View>
  );
};

export default Transfer;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.c3,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: normalize(15),
    paddingVertical: normalize(24),
    borderBottomWidth: 0.5,
    borderBottomColor: colors.c9,
  },
  content: {
    marginHorizontal: normalize(15),
    paddingVertical: normalize(16),
  },
  card: {
    width: normalize(164.5),
    height: normalize(180),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 16,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: normalize(8),
  },
  label: {
    width: normalize(80),
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(14),
    color: colors.c6,
    textAlign: 'center',
  },
  labelBlue: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(14),
    color: colors.c1,
  },
  lastTransaction: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(14),
    color: colors.black,
  },
});
