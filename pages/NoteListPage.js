import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import Card from '../components/Card';
import AddButton from '../components/AddButton'
import AnimatedHeader from '../components/AnimatedHeader'
import { DataContext } from '../App';

export default ({navigation}) => {
  const post = useContext(DataContext)
  const { data } = post

  const offset = useRef(new Animated.Value(0)).current;
 

  return (
    <>
      <AddButton navigation={navigation} />
      <AnimatedHeader animatedValue={offset} data={data.length} />
      <ScrollView contentContainerStyle={{paddingTop: 200}} scrollEventThrottle={16} style={styles.scrollContainer} onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: offset } }}],
            { useNativeDriver: false }
          )}>
        {
          data.map((item)=>{
            return (<Card item={item} key={item.uid} itemID={item.uid} navigation={navigation}/>)
          })
        }
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: '#EBE9E7'
  }
})