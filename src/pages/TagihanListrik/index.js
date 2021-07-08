import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../utils';
import {Button, Gap, Header, SlidingUpPanel} from '../../components';
import {IcCloseCircle, LogoPLN} from '../../assets';
import normalize from 'react-native-normalize';

const TagihanListrik = () => {
  const [number, setNumber] = React.useState('');
  const [isShow, setIsShow] = React.useState(false);
  const close = () => {
    setIsShow(false);
  };
  return (
    <View style={styles.page}>
      <Header text="Tagihan Listrik" detail icon={<LogoPLN />} />
      <View style={styles.container}>
        <Text style={styles.label}>ID Pelanggan</Text>
        <Gap height={4} />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Contoh 1234567890"
            placeholderTextColor={colors.c4}
            style={styles.input}
            keyboardType="numeric"
            value={number}
            onChangeText={value => setNumber(value)}
          />
          {number !== '' && (
            <TouchableOpacity activeOpacity={0.7} onPress={() => setNumber('')}>
              <IcCloseCircle />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.button}>
          {number !== '' ? (
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
        type="PLN"
        phone={number}
      />
    </View>
  );
};

export default TagihanListrik;

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
    backgroundColor: colors.c3,
    borderTopLeftRadius: normalize(20),
    borderTopRightRadius: normalize(20),
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: normalize(24),
    marginHorizontal: normalize(15),
  },
});
