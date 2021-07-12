import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import normalize from 'react-native-normalize';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {colors} from '../../../utils';
import {ListHistory} from '../../../components';

const renderTabBar = props => {
  return (
    <TabBar
      {...props}
      style={styles.background}
      indicatorStyle={styles.indicatorStyle}
      renderLabel={({route}) => <Text style={styles.text}>{route.title}</Text>}
    />
  );
};

const Berlangsung = () => {
  return (
    <View style={styles.container}>
      <ListHistory product="Pulsa" date="14 Jun 2021" time="20:12" />
      <ListHistory product="Pulsa" date="14 Jun 2021" time="20:12" />
    </View>
  );
};

const Selesai = () => {
  return (
    <View style={styles.container}>
      <ListHistory product="Pulsa" date="14 Jun 2021" time="20:12" />
      <ListHistory product="Pulsa" date="14 Jun 2021" time="20:12" />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const TabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Berlangsung'},
    {key: '2', title: 'Selesai'},
  ]);

  const renderScene = SceneMap({
    1: Berlangsung,
    2: Selesai,
  });
  return (
    <View style={styles.tabContainer}>
      <TabView
        navigationState={{index, routes}}
        renderTabBar={renderTabBar}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.backgroundColor}
      />
    </View>
  );
};

export default TabSection;

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
  },
  indicatorStyle: {
    backgroundColor: colors.c3,
  },
  background: {
    backgroundColor: colors.c1,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(14),
    color: colors.c3,
    textAlign: 'center',
  },
  backgroundColor: {
    backgroundColor: colors.c3,
  },
  container: {
    marginVertical: normalize(18),
    marginHorizontal: normalize(15),
  },
});
