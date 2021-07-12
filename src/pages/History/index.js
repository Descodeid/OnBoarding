import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SecondHeader, TabSection} from '../..//components';
import {colors} from '../../utils';

const History = () => {
  return (
    <View style={styles.page}>
      <SecondHeader text="Riwayat Transaksi " />
      <TabSection />
    </View>
  );
};

export default History;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.c3,
  },
});
