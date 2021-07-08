import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import normalize from 'react-native-normalize';
import {IcCloseCircle, LogoBPJS} from '../../assets';
import {Button, Gap, Header, SlidingUpPanel} from '../../components';
import {colors} from '../../utils';
import DropDownPicker from 'react-native-dropdown-picker';

const BPJS = () => {
  const [number, setNumber] = React.useState('');
  const [isShow, setIsShow] = React.useState(false);
  const close = () => {
    setIsShow(false);
  };

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const [items, setItems] = React.useState([
    {label: 'Juli', value: 'Juli'},
    {label: 'Agustus', value: 'Agustus'},
  ]);

  return (
    <View style={styles.page}>
      <Header text="BPJS" detail icon={<LogoBPJS />} />
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>ID Pelanggan</Text>
          <Gap height={4} />
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Contoh 1234567890"
              placeholderTextColor={colors.c4}
              style={styles.input}
              keyboardType="numeric"
              value={number}
              onChangeText={item => setNumber(item)}
            />
            {number !== '' && (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setNumber('')}>
                <IcCloseCircle />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <Gap height={8} />
        <View>
          <Text style={styles.label}>Sampai dengan</Text>
          <Gap height={4} />
          <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
            style={styles.picker}
            placeholder="Pilih bulan"
            textStyle={styles.textPicker}
            placeholderStyle={styles.placeholderStyle}
            dropDownContainerStyle={styles.dropDownContainerStyle}
            listMode="SCROLLVIEW"
          />
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.button}>
          {number !== '' && value !== null ? (
            <Button
              text="Lanjut Pembayaran"
              fontFamily="Poppins-SemiBold"
              fontSize={16}
              borderRadius={12}
              onPress={() => setIsShow(!isShow)}
            />
          ) : (
            <Button
              text="Lanjut Pembayaran"
              fontFamily="Poppins-SemiBold"
              fontSize={16}
              color={colors.c6}
              borderRadius={12}
              onPress={() => setIsShow(!isShow)}
              type="disabled"
            />
          )}
        </View>
      </View>
      <SlidingUpPanel
        show={isShow}
        closePopup={close}
        type="BPJS"
        phone={number}
        date={value}
      />
    </View>
  );
};

export default BPJS;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F7F6FB',
  },
  container: {
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(24),
  },
  label: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(14),
    color: colors.c5,
  },
  inputContainer: {
    height: normalize(56),
    flexDirection: 'row',
    backgroundColor: colors.c3,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(15),
    borderRadius: normalize(12),
  },
  input: {
    flex: 1,
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(14),
    color: colors.c6,
  },
  card: {
    flex: 1,
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: normalize(24),
    marginHorizontal: normalize(15),
  },
  picker: {
    height: normalize(56),
    backgroundColor: colors.c3,
    paddingHorizontal: normalize(15),
    borderWidth: 0,
    borderRadius: normalize(8),
    zIndex: 0,
  },
  textPicker: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(14),
    color: colors.c5,
  },
  placeholderStyle: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.c4,
  },
  dropDownContainerStyle: {
    backgroundColor: colors.c3,
    borderColor: colors.c5,
    zIndex: 1,
  },
});
