import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import normalize from 'react-native-normalize';
import {
  IcHome,
  IcHomeActive,
  IcQRIS,
  IcUser,
  IcUserActive,
} from '../../../assets';
import {colors} from '../../../utils';
import {Gap} from '../../../components';

const Icon = ({label, active}) => {
  switch (label) {
    case 'Home':
      return active ? <IcHomeActive /> : <IcHome />;
    case 'QRIS':
      return active ? <IcQRIS /> : <IcQRIS />;
    case 'Profile':
      return active ? <IcUserActive /> : <IcUser />;

    default:
      <IcHomeActive />;
  }
  return <IcHomeActive />;
};

const BottomNavigation = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View>
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.menu}>
              <View style={styles.line(isFocused)} />
              <Gap height={12} />
              <Icon label={label} active={isFocused} />
              <Text style={styles.text(isFocused)}>{label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: normalize(52),
    justifyContent: 'space-between',
    borderTopLeftRadius: normalize(16),
    borderTopRightRadius: normalize(16),
    elevation: 10,
  },
  text: isFocused => ({
    fontFamily: isFocused ? 'Poppins-SemiBold' : 'Poppins-Regular',
    fontSize: normalize(12),
    color: isFocused ? colors.c1 : colors.c4,
    paddingTop: normalize(3),
    lineHeight: normalize(18),
  }),
  menu: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: isFocused => ({
    backgroundColor: colors.c1,
    width: isFocused ? 30 : 0,
    height: isFocused ? 4 : 0,
    borderBottomLeftRadius: normalize(4),
    borderBottomRightRadius: normalize(4),
  }),
});
