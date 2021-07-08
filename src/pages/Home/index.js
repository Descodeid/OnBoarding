import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../utils';
import {
  BackgroundHome,
  IcBell,
  IcBPJS,
  IcHistory,
  IcInternet,
  IcMore,
  IcPaketData,
  IcPLN,
  IcPulsa,
  IcTopUp,
  IcTransfer,
  IcWallet,
  User,
} from '../../assets';
import normalize from 'react-native-normalize';
import {Gap, Number} from '../../components';
import {Promo} from '../../assets';

const Home = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ScrollView>
        {/* Header */}
        <ImageBackground source={BackgroundHome} style={styles.background}>
          <View style={styles.header}>
            <View style={styles.leftHeader}>
              <Image source={User} style={styles.profile} />
              <View style={styles.welcome}>
                <Text style={styles.welcomeText}>Selamat datang</Text>
                <Text style={styles.name}>Andi hidayat</Text>
              </View>
            </View>
            <View>
              <IcBell />
            </View>
          </View>
        </ImageBackground>
        {/* Card E-Wallet */}
        <View style={styles.card}>
          <View style={styles.amountContainer}>
            <View style={styles.leftAmountContainer}>
              <IcWallet />
              <Gap width={8} />
              <Text style={styles.textAmount}>Saldo kamu</Text>
            </View>
            <Number number={1500000} style={styles.amount} />
          </View>
          <View style={styles.row}>
            <View style={styles.center}>
              <IcTopUp />
              <Gap height={8} />
              <Text style={styles.text}>Top Up</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.center}
              onPress={() => navigation.navigate('Transfer')}>
              <IcTransfer />
              <Gap height={8} />
              <Text style={styles.text}>Transfer</Text>
            </TouchableOpacity>
            <View style={styles.center}>
              <IcHistory />
              <Gap height={8} />
              <Text style={styles.text}>History</Text>
            </View>
          </View>
        </View>
        {/* Main Menu */}
        <View style={styles.mainMenu}>
          <View style={styles.grid}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.column}
              onPress={() => navigation.navigate('Pulsa')}>
              <IcPulsa />
              <Text style={styles.textMainMenu}>Pulsa</Text>
            </TouchableOpacity>
            <Gap height={32} />
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.column}
              onPress={() => navigation.navigate('PLN')}>
              <IcPLN />
              <Text style={styles.textMainMenu}>PLN</Text>
            </TouchableOpacity>
            <Gap height={32} />
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.column}
              onPress={() => navigation.navigate('BPJS')}>
              <IcBPJS />
              <Text style={styles.textMainMenu}>BPJS</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.grid}>
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.column}
              onPress={() => navigation.navigate('PaketData')}>
              <IcPaketData />
              <Text style={styles.textMainMenu}>Paket Data</Text>
            </TouchableOpacity>
            <Gap height={32} />
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.column}
              onPress={() => navigation.navigate('Internet')}>
              <IcInternet />
              <Text style={styles.textMainMenu}>Internet & TV Kabel</Text>
            </TouchableOpacity>
            <Gap height={32} />
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.column}
              onPress={() => navigation.navigate('Lainnya')}>
              <IcMore />
              <Text style={styles.textMainMenu}>Lainnya</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Info dan Promo */}
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Informasi & Promo</Text>
          <Gap height={12} />
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.slider}>
            <Promo />
            <Gap width={8} />
            <Promo />
          </ScrollView>
          <Gap height={90} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.c8,
  },
  background: {
    height: normalize(187),
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(48),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile: {
    width: normalize(48),
    height: normalize(48),
  },
  leftHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  welcome: {
    marginLeft: normalize(16),
  },
  welcomeText: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(12),
    color: colors.c3,
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(16),
    color: colors.c3,
  },
  card: {
    backgroundColor: colors.c3,
    marginTop: normalize(-60),
    marginHorizontal: normalize(15),
    borderRadius: normalize(16),
    elevation: 2,
    paddingHorizontal: normalize(16),
    paddingTop: normalize(18),
    paddingBottom: normalize(20),
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: normalize(16),
    marginBottom: normalize(14),
    borderBottomWidth: 0.5,
    borderBottomColor: colors.c4,
  },
  leftAmountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: normalize(6),
  },
  textAmount: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.c5,
  },
  amount: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(16),
    color: colors.c5,
    paddingRight: normalize(6),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  center: {
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.c5,
  },
  mainMenu: {
    flexDirection: 'row',
    margin: normalize(32),
  },
  grid: {
    flex: 1,
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textMainMenu: {
    paddingLeft: normalize(12),
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.black,
  },
  slider: {
    paddingLeft: normalize(15),
    paddingRight: normalize(30),
  },
  label: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(14),
    color: colors.black,
    marginHorizontal: normalize(15),
  },
});
