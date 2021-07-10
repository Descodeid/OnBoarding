import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import normalize from 'react-native-normalize';
import {
  Alfamart,
  BCA,
  BNI,
  BRI,
  IcChecklist,
  Mandiri,
  Maybank,
  PermataBank,
} from '../../assets';
import {Button, Gap, SecondHeader} from '../../components';
import {colors} from '../../utils';

const data = [
  {name: 'Maybank', image: Maybank},
  {name: 'PermataBank', image: PermataBank},
  {name: 'BNI', image: BNI},
  {name: 'BRI', image: BRI},
  {name: 'Mandiri', image: Mandiri},
  {name: 'BCA', image: BCA},
  {name: 'Alfamart', image: Alfamart},
];

const MetodePembayaran = ({navigation}) => {
  const [active, setActive] = React.useState('');

  return (
    <View style={styles.page}>
      <SecondHeader text="Pilih Metode Pembayaran" />
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: normalize(15),
            paddingVertical: normalize(24),
          }}>
          <Text style={styles.label}>Metode Pembayaran</Text>
          <Gap height={16} />
          {data.map((item, index) => {
            return (
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.card}
                key={index}
                onPress={() => setActive(item.name)}>
                <Image source={item.image} />
                {active === item.name && <IcChecklist />}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <View style={styles.button}>
          {active === '' ? (
            <Button
              text="Lanjutkan"
              fontFamily="Poppins-SemiBold"
              fontSize={16}
              color={colors.c5}
              borderRadius={12}
              type="disabled"
            />
          ) : (
            <Button
              text="Lanjutkan"
              fontFamily="Poppins-SemiBold"
              fontSize={16}
              color={colors.c3}
              borderRadius={12}
              onPress={() => navigation.navigate('TopUpSuccess')}
            />
          )}
        </View>
      </View>
    </View>
  );
};

export default MetodePembayaran;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F7F6FB',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(16),
    color: colors.black,
  },
  card: {
    flexDirection: 'row',
    height: normalize(64),
    backgroundColor: colors.c3,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(15),
    borderRadius: normalize(16),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 20,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: normalize(16),
  },
  button: {
    paddingHorizontal: normalize(15),
    paddingBottom: normalize(24),
  },
});
