import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from 'react-native-normalize';
import {colors} from '../../../utils';

const Button = ({
  text,
  onPress,
  fontFamily = 'Poppins-Bold',
  fontSize = 18,
  color = colors.c3,
  borderRadius = 40,
  type,
}) => {
  if (type === 'mirror') {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.containerMirror(borderRadius)}
        onPress={onPress}>
        <Text style={styles.text(fontFamily, fontSize, color)}>{text}</Text>
      </TouchableOpacity>
    );
  } else if (type === 'disabled') {
    return (
      <View style={styles.containerDisabled(borderRadius)}>
        <Text style={styles.text(fontFamily, fontSize, color)}>{text}</Text>
      </View>
    );
  }
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container(borderRadius)}
      onPress={onPress}>
      <Text style={styles.text(fontFamily, fontSize, color)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: borderRadius => ({
    backgroundColor: colors.c1,
    paddingVertical: normalize(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: borderRadius,
  }),
  containerDisabled: borderRadius => ({
    backgroundColor: colors.c9,
    paddingVertical: normalize(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: borderRadius,
  }),
  containerMirror: borderRadius => ({
    backgroundColor: colors.c3,
    paddingVertical: normalize(12),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: borderRadius,
    borderWidth: 1,
    borderColor: colors.c1,
  }),
  text: (fontFamily, fontSize, color) => ({
    fontFamily,
    fontSize,
    color,
  }),
});
