import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import normalize from 'react-native-normalize';
import {IcCloseCircle, IcPhoneBook} from '../../assets';
import {Gap, Header, SlidingUpPanel} from '../../components';
import Number from '../../components/molecules/Number';
import {colors} from '../../utils';

const PaketData = () => {
  const [number, setNumber] = React.useState('');
  const [active, setActive] = React.useState(false);

  const [isShow, setIsShow] = React.useState(false);
  const close = () => {
    setIsShow(false);
  };

  const [data] = React.useState([
    {
      id: 0,
      name: 'XTRA Edukasi 2GB, 1 Hari',
      price: 20000,
      checked: false,
    },
    {
      id: 1,
      name: 'XTRA Edukasi 5GB, 7 Hari',
      price: 50000,
      checked: false,
    },
    {
      id: 2,
      name: 'XTRA Edukasi 15GB, 30 Hari',
      price: 120000,
      checked: false,
    },
  ]);

  const chooseProduct = id => {
    data[id].checked = !data[id].checked;
    setActive(!active);
  };

  return (
    <View style={styles.page}>
      <Header text="Paket Data" />
      <Gap height={24} />
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
        <ScrollView style={styles.flexOne} showsVerticalScrollIndicator={false}>
          <View style={styles.contentCard}>
            {number !== '' &&
              data.map(item => {
                return (
                  <TouchableOpacity
                    style={styles.nominalCard(item.checked)}
                    onPress={() => chooseProduct(item.id)}
                    key={item.id}>
                    <View style={styles.center}>
                      <Text style={styles.name}>{item.name}</Text>
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
        type="PaketData"
        phone="085 123 123 123"
        productName="XTRA Edukasi 2GB, 1 Hari"
        price={150000}
      />
    </View>
  );
};

export default PaketData;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F7F6FB',
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
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(16),
  },
  nominalCard: active => ({
    flex: 1,
    paddingHorizontal: normalize(15),
    paddingTop: normalize(10),
    paddingBottom: normalize(12),
    marginBottom: normalize(8),
    borderWidth: 1,
    borderColor: active ? colors.c1 : colors.c9,
    borderRadius: normalize(8),
  }),
  bottomCard: {
    flexDirection: 'row',
    backgroundColor: colors.c3,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: normalize(15),
    elevation: 10,
  },
  name: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(14),
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
    fontFamily: 'Poppins-Bold',
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
    paddingVertical: normalize(14),
    justifyContent: 'center',
    alignItems: 'center',
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
