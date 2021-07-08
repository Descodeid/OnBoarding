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
import {Dot, IcCloseCircle, IcPhoneBook, XL} from '../../assets';
import {Gap, Header, SlidingUpPanel} from '../../components';
import Number from '../../components/molecules/Number';
import {colors} from '../../utils';

const Pulsa = () => {
  const [number, setNumber] = React.useState('');
  const [active, setActive] = React.useState(false);

  const [isShow, setIsShow] = React.useState(false);
  const close = () => {
    setIsShow(false);
  };
  const [data] = React.useState([
    {
      id: 0,
      nominal: 5,
      price: 6000,
      checked: false,
    },
    {
      id: 1,
      nominal: 10,
      price: 11000,
      checked: false,
    },
    {
      id: 2,
      nominal: 15,
      price: 16000,
      checked: false,
    },
    {
      id: 3,
      nominal: 20,
      price: 21000,
      checked: false,
    },
  ]);

  const chooseProduct = id => {
    data[id].checked = !data[id].checked;
    setActive(!active);
  };
  return (
    <View style={styles.page}>
      <Header text="Pulsa" />
      <Gap height={20} />
      <View style={styles.lastTransactionContainer}>
        <Text style={styles.label}>Transaksi Terakhir</Text>
        <Gap height={12} />
        <ScrollView
          style={styles.horizontal}
          horizontal
          showsHorizontalScrollIndicator={false}>
          <View style={styles.lastCard}>
            <View style={styles.borderLogo}>
              <Image source={XL} style={styles.logo} />
            </View>
            <View>
              <Text style={styles.phone}>085 124 254 235</Text>
              <Gap height={4} />
              <View style={styles.dateContainer}>
                <Text style={styles.date}>23-Apr-2021</Text>
                <Gap width={4} />
                <Dot />
                <Gap width={4} />
                <Text style={styles.date}>5000</Text>
              </View>
            </View>
          </View>
          <View style={styles.lastCard}>
            <View style={styles.borderLogo}>
              <Image source={XL} style={styles.logo} />
            </View>
            <View>
              <Text style={styles.phone}>085 124 254 235</Text>
              <Gap height={4} />
              <View style={styles.dateContainer}>
                <Text style={styles.date}>23-Apr-2021</Text>
                <Gap width={4} />
                <Dot />
                <Gap width={4} />
                <Text style={styles.date}>5000</Text>
              </View>
            </View>
          </View>
          <View style={styles.lastCard}>
            <View style={styles.borderLogo}>
              <Image source={XL} style={styles.logo} />
            </View>
            <View>
              <Text style={styles.phone}>085 124 254 235</Text>
              <Gap height={4} />
              <View style={styles.dateContainer}>
                <Text style={styles.date}>23-Apr-2021</Text>
                <Gap width={4} />
                <Dot />
                <Gap width={4} />
                <Text style={styles.date}>5000</Text>
              </View>
            </View>
          </View>
          <Gap width={20} />
        </ScrollView>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Masukkan Nomor Telepon"
          style={styles.input}
          placeholderTextColor={colors.c4}
          keyboardType="numeric"
          value={number}
          onChangeText={value => setNumber(value)}
        />
        {number !== '' && (
          <TouchableOpacity activeOpacity={0.7} onPress={() => setNumber('')}>
            <IcCloseCircle />
          </TouchableOpacity>
        )}
        <Gap width={13} />
        <IcPhoneBook />
      </View>
      <Gap height={16} />
      <View style={styles.content}>
        <Gap height={40} />
        <ScrollView style={styles.flexOne} showsVerticalScrollIndicator={false}>
          <View style={styles.contentCard}>
            {number !== '' &&
              data.map(item => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={styles.nominalCard(item.checked)}
                    onPress={() => chooseProduct(item.id)}>
                    <View style={styles.center}>
                      <Text style={styles.nominal}>{item.nominal}</Text>
                      <Gap width={8} />
                      <Text style={styles.rupiah}>rb</Text>
                    </View>
                    <Gap height={6} />
                    <View style={styles.center}>
                      <Text style={styles.price}>Harga </Text>
                      <Number style={styles.price} number={item.price} />
                    </View>
                  </TouchableOpacity>
                );
              })}
          </View>
        </ScrollView>
        {number !== '' && active && (
          <View style={styles.bottomCard}>
            <View style={styles.flexTwo}>
              <Text style={styles.total}>Total Pembayaran</Text>
              <Gap height={8} />
              <Number style={styles.totalPrice} number={6000} />
            </View>
            <View style={styles.flexOne}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={() => setIsShow(!isShow)}>
                <Text style={styles.textButton}>Lanjut</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
      <SlidingUpPanel
        show={isShow}
        closePopup={close}
        type="Pulsa"
        phone="085 123 123 123"
        price={150000}
      />
    </View>
  );
};

export default Pulsa;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F7F6FB',
  },
  lastTransactionContainer: {
    paddingVertical: normalize(16),
  },
  label: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(14),
    color: colors.black,
    paddingHorizontal: normalize(15),
  },
  phone: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(12),
    color: colors.black,
  },
  date: {
    fontFamily: 'Poppins-Light',
    fontSize: normalize(12),
    color: colors.c9,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal: {
    paddingHorizontal: normalize(15),
  },
  lastCard: {
    backgroundColor: colors.c3,
    flexDirection: 'row',
    padding: normalize(8),
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: normalize(8),
    borderRadius: normalize(8),
  },
  borderLogo: {
    borderWidth: 1,
    width: normalize(48),
    height: normalize(48),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(7),
    paddingVertical: normalize(11),
    borderColor: colors.c9,
    borderRadius: normalize(6),
    marginRight: normalize(8),
  },
  logo: {
    width: '100%',
    resizeMode: 'contain',
  },
  inputContainer: {
    height: normalize(56),
    flexDirection: 'row',
    backgroundColor: colors.c3,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(15),
    marginHorizontal: normalize(15),
    borderRadius: normalize(12),
  },
  input: {
    flex: 1,
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(14),
    color: colors.c5,
  },
  content: {
    flex: 1,
    backgroundColor: colors.c3,
    borderTopLeftRadius: normalize(20),
    borderTopRightRadius: normalize(20),
  },
  contentCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: normalize(15),
  },
  nominalCard: active => ({
    width: normalize(165),
    paddingHorizontal: normalize(15),
    paddingTop: normalize(10),
    paddingBottom: normalize(12),
    borderRadius: normalize(8),
    marginBottom: normalize(17),
    borderWidth: 1,
    borderColor: active ? colors.c1 : colors.c9,
  }),
  bottomCard: {
    flexDirection: 'row',
    backgroundColor: colors.c3,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: normalize(15),
    elevation: 10,
  },
  nominal: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(20),
    color: colors.c6,
  },
  rupiah: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(12),
    color: colors.c6,
  },
  price: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(14),
    color: colors.c1,
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  total: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(16),
    color: colors.black,
  },
  totalPrice: {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(16),
    color: colors.c1,
  },
  button: {
    backgroundColor: colors.c1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: normalize(14),
    borderRadius: normalize(10),
  },
  textButton: {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(14),
    color: colors.c3,
  },
  flexOne: {
    flex: 1,
  },
  flexTwo: {
    flex: 2,
  },
});
