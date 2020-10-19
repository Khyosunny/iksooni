import React, { useContext, useEffect, useState } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Card from '../components/Card'
import { DataContext } from '../App'

export default ({navigation}) => {

  const post = useContext(DataContext)
  const { data } = post

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.writeBtn} onPress={()=>{navigation.navigate('NewPostPage')}} >
          <Text style={styles.writeBtnText}>글쓰기</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollContainer}>
        {
          data && data.map((item, i)=>{
            return (<Card item={item} key={i} navigation={navigation}/>)
          })
        }
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  writeBtn: {
    padding: 10,
    backgroundColor: '#fff',
    borderColor: 'grey',
    borderWidth: 1,
    width: 80,
    alignSelf: 'flex-end'
  },
  writeBtnText: {
    textAlign: 'center'
  },
  scrollContainer: {
    backgroundColor: 'orange'
  }
})