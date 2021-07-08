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
import {IcCloseCircle, LogoPLN} from '../../assets';
import {Gap, Header, SlidingUpPanel} from '../../components';
import Number from '../../components/molecules/Number';
import {colors} from '../../utils';

const TokenListrik = () => {
  const [number, setNumber] = React.useState('');
  const [active, setActive] = React.useState(false);

  const [isShow, setIsShow] = React.useState(false);
  const close = () => {
    setIsShow(false);
  };

  const [data] = React.useState([
    {
      id: 0,
      price: 20000,
      checked: false,
    },
    {
      id: 1,
      price: 50000,
      checked: false,
    },
    {
      id: 2,
      price: 120000,
      checked: false,
    },
    {
      id: 3,
      price: 150000,
      checked: false,
    },
  ]);

  const chooseProduct = id => {
    data[id].checked = !data[id].checked;
    setActive(!active);
  };
  return (
    <View style={styles.page}>
      <Header text="Token Listrik" detail icon={<LogoPLN />} />
      <Gap height={24} />
      <Text style={styles.label}>ID Pelanggan</Text>
      <Gap height={8} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Contoh 1234567890"
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
        type="PLN"
        phone={number}
      />
    </View>
  );
};

export default TokenListrik;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F7F6FB',
  },
  label: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(14),
    color: '#000000',
    paddingHorizontal: normalize(15),
  },
  inputContainer: {
    height: normalize(56),
    flexDirection: 'row',
    backgroundColor: colors.c3,
    marginHorizontal: normalize(15),
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(15),
    borderRadius: normalize(8),
  },
  input: {
    flex: 1,
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(14),
    color: colors.c5,
  },
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: normalize(20),
    borderTopRightRadius: normalize(20),
  },
  contentCard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: normalize(32),
    paddingHorizontal: normalize(15),
  },
  center: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(18),
    color: colors.c6,
  },
  nominalCard: active => ({
    width: normalize(165),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: normalize(17),
    paddingVertical: normalize(24),
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: normalize(14),
    borderRadius: normalize(10),
  },
  textButton: {
    fontFamily: 'Poppins-SemiBold',
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
