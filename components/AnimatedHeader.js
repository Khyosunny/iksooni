import React from 'react';
import { Animated, View, Text, StyleSheet } from 'react-native';

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
    outputRange: [30, 26, 22],
    extrapolate: 'clamp'
  });

  const miniTitleSize = animatedValue.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE ],
    outputRange: [20, 18, 0],
    extrapolate: 'clamp'
  });

  const miniTitleOpacity = animatedValue.interpolate({
    inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE ],
    outputRange: [1, 0, 0],
    extrapolate: 'clamp'
  });

  return (
    <Animated.View style={[styles.container, {height: headerHeight}]} >
      <Animated.Text style={[styles.title, {fontSize: titleText}]}>모든 노트</Animated.Text>
      <Animated.Text style={[styles.miniTitle, {fontSize: miniTitleSize, opacity : miniTitleOpacity}]}>노트 {data}개</Animated.Text>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    textAlign: 'center'
  },
  miniTitle: {
    color: '#828282',
    fontSize: 20,
    textAlign: 'center',
  },
})
