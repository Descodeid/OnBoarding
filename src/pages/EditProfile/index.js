import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import normalize from 'react-native-normalize';
import {User} from '../../assets';
import {Button, Gap, SecondHeader, SlidingUpPanel} from '../../components';
import {colors} from '../../utils';

const EditProfile = () => {
  const [isShow, setIsShow] = React.useState(false);
  const close = () => {
    setIsShow(false);
  };

  return (
    <SafeAreaView style={styles.page}>
      <SecondHeader text="Edit Profile" />
      <ScrollView>
        <View style={styles.profileWrapper}>
          <Image source={User} style={styles.profile} />
          <Gap width={16} />
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.borderButton}
            onPress={() => setIsShow(!isShow)}>
            <Text style={styles.textEditPhoto}>Edit Foto</Text>
          </TouchableOpacity>
        </View>
        <Gap height={6} />
        <View style={styles.container}>
          <TextInput
            placeholder="Nama"
            placeholderTextColor={colors.c5}
            style={styles.input}
            value="Ibnu Soffyan"
          />
          <TextInput
            placeholder="Email"
            placeholderTextColor={colors.c5}
            style={styles.input}
            value="ibnusoffyan@gmail.com"
          />
          <TextInput
            placeholder="No Hp"
            placeholderTextColor={colors.c5}
            style={styles.input}
            value="089098878876"
          />
          <TextInput
            placeholder="Alamat"
            placeholderTextColor={colors.c5}
            style={styles.input}
            value="Desa kertasari, Kecamatan weru, Kabupaten Cirebon"
          />
        </View>
      </ScrollView>
      <View style={styles.button}>
        <Button
          text="Edit Profile"
          borderRadius={12}
          fontFamily="Poppins-SemiBold"
          fontSize={16}
          color={colors.c3}
        />
      </View>
      <SlidingUpPanel show={isShow} closePopup={close} type="Photo" />
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.c3,
  },
  profileWrapper: {
    flexDirection: 'row',
    padding: normalize(24),
    alignItems: 'center',
  },
  profile: {
    width: normalize(77),
    height: normalize(77),
    borderRadius: normalize(77),
  },
  borderButton: {
    backgroundColor: colors.c1,
    paddingHorizontal: normalize(17),
    paddingVertical: normalize(6),
    borderRadius: normalize(20),
  },
  textEditPhoto: {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(12),
    color: colors.c3,
  },
  container: {
    paddingHorizontal: normalize(24),
  },
  button: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: normalize(15),
    paddingBottom: normalize(24),
  },
  input: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.c5,
    borderBottomWidth: 1,
    borderBottomColor: colors.c9,
    marginBottom: normalize(16),
  },
});
