import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import normalize from 'react-native-normalize';
import {Logo} from '../../assets';
import {Gap} from '../../components';
import {colors} from '../../utils';

const Security = ({navigation}) => {
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
      <View style={styles.center}>
        <Gap height={80} />
        <Image source={Logo} style={styles.logo} />
        <Gap height={34} />
        <Text style={styles.text}>Masukkan Security Code Anda</Text>
      </View>
      <Gap height={16} />
      <View style={styles.row}>
        <TextInput
          ref={pin1reff}
          style={styles.input1(pin1)}
          maxLength={1}
          keyboardType="numeric"
          value={pin1}
          onChangeText={value => {
            setPin1(value);
            if (pin1 === '') {
              pin2reff.current.focus();
            }
          }}
        />
        <TextInput
          ref={pin2reff}
          style={styles.input2(pin2)}
          maxLength={1}
          keyboardType="numeric"
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
          style={styles.input3(pin3)}
          maxLength={1}
          keyboardType="numeric"
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
          style={styles.input4(pin4)}
          maxLength={1}
          keyboardType="numeric"
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
    </View>
  );
};

export default Security;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.c1,
  },
  center: {
    alignItems: 'center',
  },
  logo: {
    width: normalize(69),
    height: normalize(110.35),
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(14),
    color: colors.c3,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalize(120),
  },
  input1: pin => ({
    backgroundColor: pin !== '' ? '#FFFFFF' : 'transparent',
    width: normalize(20),
    height: normalize(20),
    borderRadius: normalize(20),
    borderWidth: 1,
    borderColor: colors.c3,
  }),
  input2: pin => ({
    backgroundColor: pin !== '' ? '#FFFFFF' : 'transparent',
    width: normalize(20),
    height: normalize(20),
    borderRadius: normalize(20),
    borderWidth: 1,
    borderColor: colors.c3,
  }),
  input3: pin => ({
    backgroundColor: pin !== '' ? '#FFFFFF' : 'transparent',
    width: normalize(20),
    height: normalize(20),
    borderRadius: normalize(20),
    borderWidth: 1,
    borderColor: colors.c3,
  }),
  input4: pin => ({
    backgroundColor: pin !== '' ? '#FFFFFF' : 'transparent',
    width: normalize(20),
    height: normalize(20),
    borderRadius: normalize(20),
    borderWidth: 1,
    borderColor: colors.c3,
  }),
});
