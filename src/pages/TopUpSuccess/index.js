import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Background, IcSuccess} from '../../assets';
import normalize from 'react-native-normalize';
import {colors} from '../../utils';
import {Button, Gap, Number} from '../../components';

const TopUpSuccess = ({navigation}) => {
  return (
    <ImageBackground source={Background} style={StyleSheet.absoluteFillObject}>
      <View>
        <View style={styles.icon}>
          <IcSuccess />
        </View>
        <Gap height={48} />
        <View style={styles.card}>
          <Text style={styles.label}>Top Up Sukses</Text>
          <Gap height={24} />
          <Text style={styles.property}>No Hp</Text>
          <Gap height={6} />
          <Text style={styles.value}>082432654764</Text>
          <Gap height={22} />
          <Text style={styles.property}>Kode Pembelian</Text>
          <Gap height={6} />
          <Text style={styles.value}>T015100000358440000</Text>
          <Gap height={22} />
          <Text style={styles.property}>Jumlah Top Up</Text>
          <Gap height={6} />
          <Number number={20000} style={styles.value} />
        </View>
      </View>
      <View style={styles.button}>
        <Button
          type="mirror"
          borderRadius={12}
          text="Kembali ke Beranda"
          fontFamily="Poppins-SemiBold"
          fontSize={16}
          color={colors.c1}
          onPress={() => navigation.navigate('MainApp')}
        />
      </View>
    </ImageBackground>
  );
};

export default TopUpSuccess;

const styles = StyleSheet.create({
  icon: {
    paddingTop: normalize(110),
    alignItems: 'center',
  },
  card: {
    backgroundColor: colors.c3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: normalize(16),
    marginHorizontal: normalize(32),
    borderRadius: normalize(16),
  },
  label: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(20),
    color: colors.c6,
  },
  property: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.c5,
  },
  value: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(16),
    color: colors.c6,
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: normalize(15),
    paddingBottom: normalize(24),
  },
});
