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
import {IcArrowLeft, IcHide, IcShow, Logo} from '../../assets';
import {Button, Gap} from '../../components';
import {colors} from '../../utils';

const SignUp = ({navigation}) => {
  const [isHidden, setIsHidden] = React.useState(true);
  const [isHiddenConfirm, setIsHiddenConfirm] = React.useState(true);
  return (
    <View style={styles.page}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
          <IcArrowLeft />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.center}>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.appName}>Paypas</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.signUp}>Daftar Akun</Text>
          <TextInput
            placeholder="Nama"
            placeholderTextColor={colors.c5}
            style={styles.input}
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor={colors.c5}
            style={styles.input}
          />
          <TextInput
            placeholder="No Hp"
            placeholderTextColor={colors.c5}
            style={styles.input}
          />
          <TextInput
            placeholder="Alamat"
            placeholderTextColor={colors.c5}
            style={styles.input}
          />
          <View style={styles.passwordInput}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={colors.c5}
              style={styles.inputPassword}
              secureTextEntry={isHidden}
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
          <View style={styles.passwordInput}>
            <TextInput
              placeholder="Konfirmasi Password"
              placeholderTextColor={colors.c5}
              style={styles.inputPassword}
              secureTextEntry={isHiddenConfirm}
            />
            <Gap width={16} />
            <TouchableOpacity
              style={styles.hide}
              onPress={() => setIsHiddenConfirm(!isHiddenConfirm)}>
              {isHiddenConfirm ? (
                <Image source={IcShow} style={styles.icon} />
              ) : (
                <Image source={IcHide} style={styles.icon} />
              )}
            </TouchableOpacity>
          </View>
          <Gap height={18} />
          <View style={styles.button}>
            <Button text="Daftar" onPress={() => navigation.navigate('OTP')} />
          </View>
          <Gap height={20} />
          <View style={styles.footer}>
            <Text style={styles.createAccount}>Sudah punya akun? </Text>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('SignIn')}>
              <Text style={styles.signIn}>Masuk</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.c8,
    paddingHorizontal: normalize(20),
  },
  header: {
    paddingVertical: normalize(24),
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: normalize(37.24),
    height: normalize(59.56),
    marginBottom: normalize(2),
  },
  appName: {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(18),
    color: colors.c1,
  },
  card: {
    backgroundColor: colors.c3,
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(20),
    borderRadius: normalize(20),
    marginVertical: normalize(18),
    elevation: 4,
  },
  signUp: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(18),
    color: colors.c6,
    textAlign: 'center',
  },
  input: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.c5,
    borderBottomWidth: 1,
    borderBottomColor: colors.c9,
    marginBottom: normalize(16),
  },
  inputPassword: {
    flex: 1,
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.c5,
    borderBottomWidth: 1,
    borderBottomColor: colors.c9,
    marginBottom: normalize(16),
  },
  icon: {
    width: normalize(24),
    height: normalize(24),
  },
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: normalize(42),
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
  signIn: {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(14),
    color: colors.c1,
  },
});
