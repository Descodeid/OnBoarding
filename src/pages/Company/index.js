import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {Gap, SecondHeader} from '../../components';
import {colors} from '../../utils';

const Company = () => {
  return (
    <View style={styles.page}>
      <SecondHeader text="Kebijakan Privasi" />
      <View style={styles.container}>
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam ut a ut
          rutrum scelerisque pharetra. Eu donec id dignissim ut at. Gravida
          posuere sit enim sed orci aliquam ut. Nam amet, vitae ut a sit. Sit
          nunc elementum interdum netus euismod egestas vel. Nisl lacus,
          fermentum nulla feugiat dolor est non ac imperdiet. Nisl nisi, egestas
          ac commodo non massa pellentesque odio. Tellus sed pulvinar sit felis,
          laoreet malesuada odio lorem.
        </Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.textVisi}>VISI & MISI</Text>
      </View>
      <View style={styles.margin}>
        <View style={styles.row}>
          <View style={styles.dot} />
          <Gap width={12} />
          <Text style={styles.list}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi in lacus
            cursus amet nunc
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Company;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.c3,
  },
  container: {
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(24),
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.c5,
    lineHeight: normalize(25),
    textAlign: 'justify',
  },
  content: {
    backgroundColor: 'rgba(69, 132, 255, 0.2)',
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(5),
  },
  textVisi: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.c1,
    lineHeight: normalize(25),
    textAlign: 'justify',
  },
  margin: {
    margin: normalize(15),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: normalize(5),
    height: normalize(5),
    backgroundColor: colors.c1,
  },
  list: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.c5,
    lineHeight: normalize(25),
    paddingRight: normalize(25),
  },
});
