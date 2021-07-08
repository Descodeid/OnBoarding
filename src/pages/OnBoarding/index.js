import React from 'react';
import {
  Animated,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import normalize from 'react-native-normalize';
import Sliders from '../../assets/JSON/OnBoarding';
import {Button, Gap, OnBoardingPagination} from '../../components';
import {colors} from '../../utils';

const OnBoarding = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const slidersRef = React.useRef(null);
  const {width} = useWindowDimensions();

  const viewableItemsChanged = React.useRef(({viewableItems}) => {
    setCurrentIndex(viewableItems[0].index);
  }).current;

  const viewConfig = React.useRef({
    viewAreaCoveragePercentThreshold: 50,
  }).current;

  const scrollTo = () => {
    if (currentIndex < Sliders.length - 1) {
      slidersRef.current.scrollToIndex({index: currentIndex + 1});
    } else {
      navigation.replace('SignIn');
    }
  };

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <FlatList
          data={Sliders}
          renderItem={({item}) => (
            <View style={[styles.content, {width}]}>
              <Gap height={124} />
              <Image source={item.image} />
              <Gap height={46} />
              <OnBoardingPagination data={Sliders} scrollX={scrollX} />
              <Gap height={12} />
              <View style={styles.card}>
                <View style={styles.textContainer}>
                  <Text style={styles.title}>
                    {item.title}
                    <Text style={styles.subTitle}>{item.subTitle}</Text>
                  </Text>
                </View>
                <Gap height={25} />
                <Text style={styles.description}>{item.description}</Text>
                <View style={styles.button}>
                  <Button text={item.text} onPress={scrollTo} />
                  <Gap height={14} />
                  {currentIndex === 2 && (
                    <TouchableOpacity
                      activeOpacity={0.7}
                      style={styles.center}
                      onPress={() => navigation.navigate('SignUp')}>
                      <Text style={styles.signUp}>Daftar</Text>
                    </TouchableOpacity>
                  )}
                </View>
              </View>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          bounces={false}
          keyExtractor={item => item.id}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {useNativeDriver: false},
          )}
          onViewableItemsChanged={viewableItemsChanged}
          viewabilityConfig={viewConfig}
          ref={slidersRef}
        />
      </View>
    </View>
  );
};

export default OnBoarding;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.c1,
  },
  container: {
    flex: 3,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: normalize(50),
  },
  card: {
    width: '90%',
    height: normalize(250),
    backgroundColor: colors.c3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: normalize(32),
    paddingBottom: normalize(16),
    paddingHorizontal: normalize(35),
    borderRadius: normalize(20),
    marginBottom: normalize(20),
  },
  textContainer: {
    width: normalize(178),
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(20),
    color: colors.c5,
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: normalize(20),
    color: colors.c1,
    textAlign: 'center',
  },
  description: {
    fontFamily: 'Poppins-Regular',
    fontSize: normalize(12),
    color: colors.c5,
    width: normalize(200),
    textAlign: 'center',
  },
  button: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUp: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: normalize(14),
    color: colors.c1,
  },
});
