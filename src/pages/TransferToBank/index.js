import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import normalize from 'react-native-normalize';
import {Logo} from '../../assets';
import {
  Button,
  Gap,
  Number,
  SecondHeader,
  SlidingUpPanel,
} from '../../components';
import {colors} from '../../utils';

const TransferToBank = () => {
  const [accountNumber, setAccountNumber] = React.useState('');
  const [note, setNote] = React.useState('');

  const [isShow, setIsShow] = React.useState(false);
  const close = () => {
    setIsShow(false);
  };

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    {label: 'BCA', value: 'BCA'},
    {label: 'BRI', value: 'BRI'},
  ]);
  return (
    <View style={styles.page}>
      <SecondHeader text="Transfer" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <TextInput
            placeholder="No Rekening"
            placeholderTextColor={colors.c4}
            style={styles.input}
            value={accountNumber}
            onChangeText={item => setAccountNumber(item)}
            keyboardType="numeric"
          />
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={styles.picker}
            placeholder="Nama Bank"
            textStyle={styles.textPicker}
            placeholderStyle={styles.placeholderStyle}
            dropDownContainerStyle={styles.dropDownContainerStyle}
            listMode="SCROLLVIEW"
          />
          <TextInput
            placeholder="Catatan"
            placeholderTextColor={colors.c4}
            style={styles.input}
            value={note}
            onChangeText={item => setNote(item)}
          />
          <Gap height={8} />
          <Text style={styles.label}>Sumber dana</Text>
          <Gap height={8} />
          <View style={styles.border}>
            <Image source={Logo} style={styles.logo} />
            <Gap width={16} />
            <View>
              <Text style={styles.saldo}>Saldo Paypas</Text>
              <Number number={1200000} style={styles.amount} />
            </View>
          </View>
          <Gap height={230} />
          <View style={styles.button}>
            {accountNumber !== '' && value !== null && note !== '' ? (
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
        </View>
      </ScrollView>
      <SlidingUpPanel
        show={isShow}
        closePopup={close}
        type="Transfer"
        date={value}
        name="Ryan Aprianto"
        bank={value}
        accountNumber={accountNumber}
      />
    </View>
  );
};

export default TransferToBank;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.c3,
  },
  container: {
    flex: 1,
    marginHorizontal: normalize(15),
    paddingVertical: normalize(40),
  },
  input: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.c6,
    borderBottomWidth: 1,
    borderBottomColor: colors.c9,
    marginBottom: normalize(24),
  },
  picker: {
    borderWidth: 0,
    borderRadius: 0,
    borderBottomWidth: 1,
    borderBottomColor: colors.c9,
    marginBottom: normalize(24),
    paddingLeft: normalize(-20),
    zIndex: 0,
  },
  textPicker: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.c6,
    marginLeft: normalize(-5),
  },
  placeholderStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.c4,
    marginLeft: normalize(-5),
  },
  dropDownContainerStyle: {
    backgroundColor: colors.c3,
    paddingHorizontal: normalize(16),
    borderColor: colors.c9,
    zIndex: 1,
  },
  label: {
    fontFamily: 'Poppins-Light',
    fontSize: normalize(12),
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
  button: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
});
