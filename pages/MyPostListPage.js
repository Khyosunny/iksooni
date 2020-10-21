import React, { useContext, useEffect, useState } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Card from '../components/Card'
import { DataContext } from '../App'

export default ({navigation}) => {
  const post = useContext(DataContext)
  const { data } = post

  const onPressClick = () => {
    navigation.navigate('NewPostPage');
  }


  return (
    <>
      <TouchableOpacity style={styles.writeBtn} onPress={onPressClick} >
        <Text style={styles.writeBtnText}>＋</Text>
      </TouchableOpacity>
      <ScrollView style={styles.scrollContainer}>
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
  writeBtn: {
    backgroundColor: '#379BB5',
    width: 60,
    height: 60,
    borderRadius: 60,
    zIndex: 10,
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  writeBtnText: {
    textAlign: 'center',
    textAlignVertical: 'center',
    lineHeight: 60,
    fontSize: 30,
    color: '#fff'
  },
  scrollContainer: {
    backgroundColor: '#EBE9E7'
  }
})