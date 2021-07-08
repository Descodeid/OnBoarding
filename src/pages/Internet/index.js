import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Biznet, CBN, Indihome, MNC, Transvision} from '../../assets';
import {Gap, Header, ListProfile} from '../../components';
import {colors} from '../../utils';

const Internet = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header text="Internet & Tv Kabel" />
      <Gap height={47} />
      <ListProfile
        text="Biznet"
        icon={<Biznet />}
        onPress={() => navigation.navigate('DetailInternet', 'Biznet')}
      />
      <ListProfile
        text="Transvision"
        icon={<Transvision />}
        onPress={() => navigation.navigate('DetailInternet', 'Transvision')}
      />
      <ListProfile
        text="Indihome"
        icon={<Indihome />}
        onPress={() => navigation.navigate('DetailInternet', 'Indihome')}
      />
      <ListProfile
        text="CBN"
        icon={<CBN />}
        onPress={() => navigation.navigate('DetailInternet', 'CBN')}
      />
      <ListProfile
        text="MNC - Play"
        icon={<MNC />}
        onPress={() => navigation.navigate('DetailInternet', 'MNC - Play')}
      />
    </View>
  );
};

export default Internet;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.c3,
  },
});
