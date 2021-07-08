import React from 'react';
import {StyleSheet, View} from 'react-native';
import {IcBPJS, IcInternet, IcPaketData, IcPLN, IcPulsa} from '../../assets';
import {Gap, Header, ListMenu} from '../../components';
import {colors} from '../../utils';

const Lainnya = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header text="Lainnya" />
      <Gap height={45} />
      <ListMenu
        text="Pulsa"
        icon={<IcPulsa />}
        onPress={() => navigation.navigate('Pulsa')}
      />
      <ListMenu
        text="Paket Data"
        icon={<IcPaketData />}
        onPress={() => navigation.navigate('PaketData')}
      />
      <ListMenu
        text="PLN"
        icon={<IcPLN />}
        onPress={() => navigation.navigate('PLN')}
      />
      <ListMenu
        text="Internet & TV kabel"
        icon={<IcInternet />}
        onPress={() => navigation.navigate('Internet')}
      />
      <ListMenu
        text="BPJS"
        icon={<IcBPJS />}
        onPress={() => navigation.navigate('BPJS')}
      />
    </View>
  );
};

export default Lainnya;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.c3,
  },
});
