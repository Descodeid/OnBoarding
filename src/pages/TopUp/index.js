import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CurrencyInput from 'react-native-currency-input';
import normalize from 'react-native-normalize';
import {Logo} from '../../assets';
import {Button, Gap, Number, SecondHeader} from '../../components';
import {colors} from '../../utils';

const TopUp = ({navigation}) => {
  const [nominal, setNominal] = React.useState('');
  console.log(nominal);
  return (
    <View style={styles.page}>
      <SecondHeader text="Top up" />
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>Top up ke</Text>
          <Gap height={5} />
          <View style={styles.border}>
            <Image source={Logo} style={styles.logo} />
            <Gap width={16} />
            <View>
              <Text style={styles.saldo}>Saldo Paypas</Text>
              <Number number={1200000} style={styles.amount} />
            </View>
          </View>
          <Gap height={32} />
          <CurrencyInput
            placeholder="Nominal Transfer"
            placeholderTextColor={colors.c4}
            style={styles.inputNominal}
            value={nominal}
            onChangeValue={setNominal}
            prefix="Rp. "
            delimiter="."
            separator="."
            precision={0}
            onChangeText={item => {
              const str = item.slice(4);
              const newStr = str.replace(/[._]/g, '');
              console.log(newStr);
            }}
          />
          <Gap height={32} />
          <ScrollView horizontal contentContainerStyle={styles.amountContainer}>
            {nominal === 50000 ? (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.borderNominalActive}
                onPress={() => {
                  setNominal(50000);
                }}>
                <Number number={50000} style={styles.amountTopUpActive} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.borderNominal}
                onPress={() => {
                  setNominal(50000);
                }}>
                <Number number={50000} style={styles.amountTopUp} />
              </TouchableOpacity>
            )}
            {nominal === 100000 ? (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.borderNominalActive}
                onPress={() => {
                  setNominal(100000);
                }}>
                <Number number={100000} style={styles.amountTopUpActive} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.borderNominal}
                onPress={() => {
                  setNominal(100000);
                }}>
                <Number number={100000} style={styles.amountTopUp} />
              </TouchableOpacity>
            )}
            {nominal === 200000 ? (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.borderNominalActive}
                onPress={() => {
                  setNominal(200000);
                }}>
                <Number number={200000} style={styles.amountTopUpActive} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.borderNominal}
                onPress={() => {
                  setNominal(200000);
                }}>
                <Number number={200000} style={styles.amountTopUp} />
              </TouchableOpacity>
            )}
          </ScrollView>
        </View>
        {nominal === '' || nominal === null ? (
          <Button
            text="Lanjutkan"
            fontFamily="Poppins-SemiBold"
            fontSize={16}
            color={colors.c5}
            borderRadius={12}
            type="disabled"
          />
        ) : (
          <Button
            text="Lanjutkan"
            fontFamily="Poppins-SemiBold"
            fontSize={16}
            color={colors.c3}
            borderRadius={12}
            onPress={() => navigation.navigate('MetodePembayaran')}
          />
        )}
      </View>
    </View>
  );
};

export default TopUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.c3,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: normalize(24),
  },
  label: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(14),
    color: colors.c5,
  },
  border: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(13),
    borderWidth: 1,
    borderColor: colors.c9,
    borderRadius: normalize(8),
  },
  logo: {
    width: normalize(25.64),
    height: normalize(42),
  },
  saldo: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(12),
    color: colors.c6,
  },
  amount: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(14),
    color: colors.c6,
  },
  inputNominal: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(16),
    color: colors.c6,
    borderBottomWidth: 1,
    borderBottomColor: colors.c9,
  },
  amountContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  borderNominal: {
    width: normalize(100),
    height: normalize(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.c9,
    borderRadius: normalize(20),
  },
  borderNominalActive: {
    backgroundColor: colors.c7,
    width: normalize(100),
    height: normalize(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.c1,
    borderRadius: normalize(20),
  },
  amountTopUp: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.c6,
  },
  amountTopUpActive: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.c1,
  },
});
