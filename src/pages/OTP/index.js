import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import normalize from 'react-native-normalize';
import {IcArrowLeft} from '../../assets';
import {Gap} from '../../components';
import {colors} from '../../utils';

const OTP = ({navigation}) => {
  const [pin1, setPin1] = React.useState('');
  const [pin2, setPin2] = React.useState('');
  const [pin3, setPin3] = React.useState('');
  const [pin4, setPin4] = React.useState('');

  const pin1reff = React.useRef();
  const pin2reff = React.useRef();
  const pin3reff = React.useRef();
  const pin4reff = React.useRef();

  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <IcArrowLeft />
        </TouchableOpacity>
        <Gap width={16} />
        <Text style={styles.textHeader}>Verifikasi OTP</Text>
      </View>
      <Gap height={8} />
      <Text style={styles.message}>
        Masukan 4 digit yang dikirim ke +62876986765
      </Text>
      <Gap height={32} />
      <View style={styles.container}>
        <TextInput
          ref={pin1reff}
          style={styles.input}
          maxLength={1}
          keyboardType={'numeric'}
          value={pin1}
          onChangeText={value => {
            setPin1(value);
            if (pin1 === '') {
              pin2reff.current.focus();
            } else {
              console.log('Kosong');
            }
          }}
        />
        <TextInput
          ref={pin2reff}
          style={styles.input}
          maxLength={1}
          keyboardType={'numeric'}
          value={pin2}
          onChangeText={value => {
            setPin2(value);
            if (pin2 === '') {
              pin3reff.current.focus();
            } else {
              pin1reff.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin3reff}
          style={styles.input}
          maxLength={1}
          keyboardType={'numeric'}
          value={pin3}
          onChangeText={value => {
            setPin3(value);
            if (pin3 === '') {
              pin4reff.current.focus();
            } else {
              pin2reff.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin4reff}
          style={styles.input}
          maxLength={1}
          keyboardType={'numeric'}
          value={pin4}
          onChangeText={value => {
            setPin4(value);
            if (pin3 === '') {
              pin3reff.current.focus();
            }
          }}
          onSubmitEditing={() => navigation.navigate('MainApp')}
        />
      </View>
      <Gap height={80} />
      <Text style={styles.countDown}>Kirim ulang dalam 00.23</Text>
    </View>
  );
};

export default OTP;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.c3,
    paddingHorizontal: normalize(20),
  },
  header: {
    flexDirection: 'row',
    paddingTop: normalize(24),
    alignItems: 'center',
  },
  textHeader: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(18),
    color: colors.c6,
    marginTop: normalize(4),
  },
  message: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(16),
    color: colors.c6,
    lineHeight: normalize(25),
    marginLeft: normalize(40),
  },
  container: {
    flexDirection: 'row',
    marginHorizontal: normalize(36),
    justifyContent: 'space-between',
  },
  input: {
    width: normalize(56),
    height: normalize(56),
    borderRadius: normalize(8),
    backgroundColor: '#FFFFFF',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,
    elevation: 11,
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(20),
    paddingLeft: normalize(24),
  },
  countDown: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(16),
    color: colors.c1,
    textAlign: 'center',
  },
});
