import React from 'react';
import { Animated, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import hamburger from '../assets/Hamburger.png'
import search from '../assets/Search.png'

const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default ({animatedValue, data}) => {

  const headerHeight = animatedValue.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE],
    outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
    extrapolate: 'clamp'
  });

  const titleText = animatedValue.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE ],
    outputRange: [30, 26, 0],
    extrapolate: 'clamp'
  });

  const titleText2 = animatedValue.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE ],
    outputRange: [0, 10, 24],
    extrapolate: 'clamp'
  });

  const miniTitleSize = animatedValue.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE ],
    outputRange: [20, 18, 0],
    extrapolate: 'clamp'
  });

  const textOpacity = animatedValue.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE ],
    outputRange: [1, 0, 0],
    extrapolate: 'clamp'
  });

  const textOpacity2 = animatedValue.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE ],
    outputRange: [0, 0, 1],
    extrapolate: 'clamp'
  });

  return (
    <Animated.View style={[styles.container, {height: headerHeight}]} >
      <Animated.Text style={[styles.title, {fontSize: titleText, opacity : textOpacity}]}>나의 노트</Animated.Text>
      <Animated.Text style={[styles.miniTitle, {fontSize: miniTitleSize, opacity : textOpacity}]}>노트 {data}개</Animated.Text>
      <View style={styles.iconBox}>
        <View style={styles.iconLeftBox}>
          <TouchableOpacity>
            <Image style={styles.hamburgerIcon} source={hamburger} />
          </TouchableOpacity>
          <Animated.Text style={[styles.title2, {fontSize: titleText2, opacity : textOpacity2}]}>나의 노트</Animated.Text>
        </View>
        <View style={styles.iconRightBox}>
          <TouchableOpacity>
            <Image style={styles.searchIcon} source={search} />
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  )
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    backgroundColor: '#EBE9E7',
    width: '100%',
    justifyContent: 'center',
    // alignItems: 'center'
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  title2: {
    marginLeft: 20,
  },
  miniTitle: {
    color: '#828282',
    fontSize: 20,
    textAlign: 'center',
  },
  iconBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    position: 'absolute',
    left: 0,
    bottom: 15,
  },
  iconLeftBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hamburgerIcon: {
    width: 30,
    height: 30,
  },
  searchIcon: {
    width: 30,
    height: 30,
  }
})
