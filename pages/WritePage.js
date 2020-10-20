import React, { useEffect, useState, useContext } from 'react';
import { View, ScrollView, TextInput, Text, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';
import { fire_db } from '../fbase'


export default ({navigation,route}) => {
  const { uid, text } = route.params
  const [value, setValue] = useState(text);

  console.log(uid)


  const onPress = () => {
    Keyboard.dismiss()
    fire_db.collection('posts').doc(`${uid}`).update({
      text: value
    })
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