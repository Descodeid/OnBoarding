import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {SecondHeader} from '../../components';
import {colors} from '../../utils';

const Privacy = () => {
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
    </View>
  );
};

export default Privacy;

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
});
