import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {BackgroundMerchant, IcMerchant} from '../../assets';
import {colors} from '../../utils';
import {Button, Gap, SlidingUpPanel} from '../../components';
import CurrencyInput from 'react-native-currency-input';

const InfoToko = () => {
  const [nominal, setNominal] = React.useState('');
  const [isShow, setIsShow] = React.useState(false);
  const close = () => {
    setIsShow(false);
  };
  return (
    <View style={styles.page}>
      <Image source={BackgroundMerchant} style={styles.background} />
      <View style={styles.header}>
        <IcMerchant />
        <Gap width={16} />
        <Text style={styles.text}>Detacell Infomedia</Text>
      </View>
      <Gap height={42} />
      <CurrencyInput
        placeholder="Nominal Pembayaran"
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
      <View style={styles.button}>
        {nominal !== '' ? (
          <Button
            text="Lanjutkan"
            fontFamily="Poppins-SemiBold"
            fontSize={16}
            color={colors.c3}
            borderRadius={12}
            onPress={() => setIsShow(!isShow)}
          />
        ) : (
          <Button
            text="Lanjutkan"
            fontFamily="Poppins-SemiBold"
            fontSize={16}
            color={colors.c5}
            borderRadius={12}
            type="disabled"
          />
        )}
      </View>
      <SlidingUpPanel
        show={isShow}
        closePopup={close}
        type="QRIS"
        nominal={nominal}
      />
    </View>
  );
};

export default InfoToko;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.c3,
  },
  background: {
    width: '100%',
    height: normalize(172.33),
  },
  header: {
    position: 'absolute',
    top: normalize(58),
    left: normalize(24),
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(20),
    color: colors.c3,
  },
  inputNominal: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(16),
    color: colors.c6,
    borderBottomWidth: 1,
    borderBottomColor: colors.c9,
    marginBottom: normalize(24),
    marginHorizontal: normalize(24),
  },
  button: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    marginHorizontal: normalize(15),
    marginBottom: normalize(24),
  },
});
