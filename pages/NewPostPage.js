import React, { useEffect, useState, useContext } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput, Keyboard } from 'react-native';
import { DataContext } from '../App'

import { fire_db } from '../fbase'

export default () => {
  const [value, setValue] = useState('');
 
  const now = new Date();

 


  const post = useContext(DataContext);
  const { setData, data } = post;

  
  const listSave = () => {
    fire_db.collection('posts').add({
      text: value,
      date: `${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일`,
      createdTime: Date.now(),
    })
  }





  const onPress = () => {
    listSave()
    console.log(data)
    Keyboard.dismiss()
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.saveBtn} onPress={onPress}>
        <Text style={styles.saveBtnText}>저장</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} onChangeText={text => setValue(text)} value={value} multiline={true}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  saveBtn: {
    width: 50,
    padding: 10,
    backgroundColor: 'orange',
    alignSelf: 'flex-end'
  },
  input: {
    fontSize: 20,
    width: '100%',
    height: '100%',
    padding: 20,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
  }
})