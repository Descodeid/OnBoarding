import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import normalize from 'react-native-normalize';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {ILQRIS} from '../../assets';
import {colors} from '../../utils';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const QRIS = ({navigation}) => {
  const makeSlideOutTranslation = (translationType, fromValue) => {
    return {
      from: {
        [translationType]: width * 0.1,
      },
      to: {
        [translationType]: fromValue,
      },
    };
  };
  const onSuccess = e => {
    navigation.navigate('InfoToko');
  };
  return (
    <View style={StyleSheet.absoluteFill}>
      <QRCodeScanner
        onRead={onSuccess}
        showMarker
        cameraStyle={{height}}
        customMarker={
          <>
            <View style={styles.container}>
              <View style={styles.rectangle}>
                <View style={styles.row}>
                  <View style={styles.leftTop} />
                  <View style={styles.flexOne} />
                  <View style={styles.rightTop} />
                </View>
                <View style={styles.center}>
                  <Animatable.View
                    style={styles.scanBar}
                    direction="alternate-reverse"
                    iterationCount="infinite"
                    duration={1700}
                    easing="linear"
                    animation={makeSlideOutTranslation(
                      'translateY',
                      width * -0.1,
                    )}
                  />
                </View>
                <View style={styles.row}>
                  <View style={styles.leftBottom} />
                  <View style={styles.flexOne} />
                  <View style={styles.rightBottom} />
                </View>
              </View>
            </View>
            <View style={styles.footer}>
              <ILQRIS />
            </View>
          </>
        }
      />
    </View>
  );
};

export default QRIS;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFill,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    width: width / 2,
    height: width / 2,
    marginBottom: normalize(115),
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexOne: {
    flex: 1,
  },
  leftTop: {
    flex: 1,
    borderLeftWidth: 4,
    borderTopWidth: 4,
    borderColor: colors.c3,
    borderTopLeftRadius: normalize(40),
  },
  leftBottom: {
    flex: 1,
    borderLeftWidth: 4,
    borderBottomWidth: 4,
    borderColor: colors.c3,
    borderBottomLeftRadius: normalize(40),
  },
  rightTop: {
    flex: 1,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderColor: colors.c3,
    borderTopRightRadius: normalize(40),
  },
  rightBottom: {
    flex: 1,
    borderRightWidth: 4,
    borderBottomWidth: 4,
    borderColor: colors.c3,
    borderBottomRightRadius: normalize(40),
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: normalize(115),
  },
  scanBar: {
    width: width * 0.36,
    height: width * 0.0025,
    backgroundColor: colors.c3,
  },
});
