import React from 'react';
import {StyleSheet, View, Animated, useWindowDimensions} from 'react-native';
import normalize from 'react-native-normalize';
import {colors} from '../../../utils';

const OnBoardingPagination = ({data, scrollX}) => {
  const {width} = useWindowDimensions();
  return (
    <View style={styles.container}>
      {data.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const dotWidth = scrollX.interpolate({
          inputRange,
          outputRange: [10, 20, 10],
          extrapolate: 'clamp',
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.3, 1, 0.3],
        });
        return (
          <Animated.View
            style={[styles.dot, {width: dotWidth, opacity}]}
            key={i.toString()}
          />
        );
      })}
    </View>
  );
};

export default OnBoardingPagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: normalize(64 / 2),
  },
  dot: {
    height: normalize(8),
    borderRadius: normalize(8),
    backgroundColor: colors.c3,
    marginHorizontal: normalize(8),
  },
});
