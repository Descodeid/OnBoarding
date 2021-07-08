import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import normalize from 'react-native-normalize';
import {IcArrowLeft, IcFlag, IcHide, IcLock, IcShow, Logo} from '../../assets';
import {Button, Gap} from '../../components';
import {colors, useForm} from '../../utils';

const SignIn = ({navigation}) => {
  const [isHidden, setIsHidden] = React.useState(true);

  const [form, setForm] = useForm({
    phone: '',
    password: '',
  });

  console.log(form);
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <IcArrowLeft />
        </TouchableOpacity>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={styles.heroWrapper}>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.welcome}>
            Selamat datang di <Text style={styles.appName}>Paypas</Text>
          </Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.label}>Masuk</Text>
          <Gap height={16} />
          <View style={styles.card}>
            <View style={styles.inputContainer}>
              <IcFlag />
              <Gap width={16} />
              <Text style={styles.codeRegion}>(+62)</Text>
              <Gap width={8} />
              <TextInput
                placeholder="8xxx"
                style={styles.input}
                placeholderTextColor={colors.c5}
                keyboardType="numeric"
                value={form.phone}
                onChangeText={value => setForm('phone', value)}
              />
            </View>
            <Gap height={10} />
            <View style={styles.inputContainer}>
              <IcLock />
              <Gap width={16} />
              <TextInput
                placeholder="Masukkan password anda"
                style={styles.input}
                placeholderTextColor={colors.c5}
                secureTextEntry={isHidden}
                value={form.password}
                onChangeText={value => setForm('password', value)}
              />
              <Gap width={16} />
              <TouchableOpacity
                style={styles.hide}
                onPress={() => setIsHidden(!isHidden)}>
                {isHidden ? (
                  <Image source={IcShow} style={styles.icon} />
                ) : (
                  <Image source={IcHide} style={styles.icon} />
                )}
              </TouchableOpacity>
            </View>
            <Gap height={10} />
            <Text style={styles.forgot}>Lupa Password?</Text>
            <Gap height={16} />
            <View style={styles.button}>
              <Button text="Masuk" onPress={() => navigation.navigate('OTP')} />
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.createAccount}>Anda tidak mempunyai akun? </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('SignUp')}>
            <Text style={styles.signUp}>Daftar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.c8,
    paddingHorizontal: normalize(20),
  },
  header: {
    paddingVertical: normalize(24),
  },
  heroWrapper: {
    width: normalize(172),
  },
  logo: {
    width: normalize(61),
    height: normalize(97.56),
  },
  welcome: {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(18),
    color: colors.c6,
  },
  appName: {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(18),
    color: colors.c1,
  },
  content: {
    paddingTop: normalize(83),
    paddingBottom: normalize(106),
  },
  label: {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(20),
    color: colors.c6,
    textAlign: 'center',
  },
  card: {
    backgroundColor: colors.c3,
    paddingHorizontal: normalize(16),
    paddingTop: normalize(24),
    paddingBottom: normalize(10),
    borderRadius: normalize(20),
    elevation: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#8B8B8B',
    borderRadius: normalize(10),
    alignItems: 'center',
    paddingHorizontal: normalize(24),
  },
  codeRegion: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.c5,
  },
  input: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.c5,
    paddingBottom: normalize(12),
  },
  icon: {
    width: normalize(24),
    height: normalize(24),
  },
  forgot: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(12),
    color: colors.c1,
    textAlign: 'right',
  },
  button: {
    marginHorizontal: normalize(46),
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccount: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.c1,
  },
  signUp: {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(14),
    color: colors.c1,
  },
});
