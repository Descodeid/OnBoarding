import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import normalize from 'react-native-normalize';
import {
  Biznet,
  CBN,
  IcCloseCircle,
  Indihome,
  MNC,
  Transvision,
} from '../../assets';
import {Button, Gap, Header, SlidingUpPanel} from '../../components';
import {colors} from '../../utils';

const DetailInternet = ({route}) => {
  const [number, setNumber] = React.useState('');
  const [isShow, setIsShow] = React.useState(false);
  const close = () => {
    setIsShow(false);
  };

  const productName = route.params;

  const Icon = ({label}) => {
    if (label === 'Biznet') {
      return <Biznet />;
    } else if (label === 'Transvision') {
      return <Transvision />;
    } else if (label === 'Indihome') {
      return <Indihome />;
    } else if (label === 'CBN') {
      return <CBN />;
    } else if (label === 'MNC - Play') {
      return <MNC />;
    }
  };

  return (
    <View style={styles.page}>
      <Header text={productName} detail icon={<Icon label={productName} />} />
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

export default DetailInternet;

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
