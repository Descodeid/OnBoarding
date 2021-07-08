import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IcPLN, LogoPLN} from '../../assets';
import {Gap, Header, ListMenu} from '../../components';
import {colors} from '../../utils';

const PLN = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header text="PLN" detail icon={<LogoPLN />} />
      <Gap height={32} />
      <ListMenu
        text="Tagihan Listrik"
        icon={<IcPLN />}
        onPress={() => navigation.navigate('TagihanListrik')}
      />
      <ListMenu
        text="Token Listrik"
        icon={<IcPLN />}
        onPress={() => navigation.navigate('TokenListrik')}
      />
    </View>
  );
};

export default PLN;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.c3,
  },
});
