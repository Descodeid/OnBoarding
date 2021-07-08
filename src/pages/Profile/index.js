import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {colors} from '../../utils';
import {
  BackgroundProfile,
  IcEdit,
  IcLockDark,
  IcPaper,
  IcSignOut,
  User,
} from '../../assets';
import {Gap, ListProfile} from '../../components';
import normalize from 'react-native-normalize';

const Profile = () => {
  return (
    <View style={styles.page}>
      <Image source={BackgroundProfile} style={styles.background} />
      <View style={styles.center}>
        <View style={styles.borderProfile}>
          <Image source={User} style={styles.profile} />
        </View>
        <Gap height={24} />
        <Text style={styles.name}>Ibnu Soffyan</Text>
        <Gap height={4} />
        <Text style={styles.phone}>082 123 456 789</Text>
      </View>
      <Gap height={33} />
      <ListProfile text="Edit Profile" icon={<IcEdit />} />
      <ListProfile text="Ubah Password" icon={<IcLockDark />} />
      <ListProfile text="Kebijakan Privasi" icon={<IcPaper />} />
      <ListProfile text="Aturan Pengguna" icon={<IcPaper />} />
      <ListProfile text="keluar" icon={<IcSignOut />} />
      <View style={styles.footer}>
        <Text style={styles.version}>Versi 1.0</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.c3,
  },
  background: {
    width: '100%',
    height: normalize(197),
  },
  borderProfile: {
    width: normalize(115),
    height: normalize(115),
    backgroundColor: colors.c3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(115 / 2),
    marginTop: normalize(-70),
  },
  profile: {
    width: normalize(96),
    height: normalize(96),
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(20),
    color: colors.black,
  },
  phone: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.black,
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: normalize(70),
  },
  version: {
    fontFamily: 'Poppins-Light',
    fontSize: normalize(14),
    color: colors.c4,
  },
});