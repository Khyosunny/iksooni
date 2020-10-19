import React, { useEffect, useState } from 'react';
import { View, ScrollView, TextInput, Text, StyleSheet, TouchableOpacity, Keyboard } from 'react-native';

export default ({navigation,route}) => {
  const [list, setList] = useState(null)
  const [value, SetValue] = useState('');

  const onPress = () => {
    Keyboard.dismiss()
  }

  useEffect(() => {
    console.log(route)
    setList(route.params)
  },[])
  
  return list && (
    <View style={styles.container}>
      <TouchableOpacity style={styles.saveBtn} onPress={onPress}>
        <Text style={styles.saveBtnText}>저장</Text>
      </TouchableOpacity>
      <TextInput style={styles.input} onChangeText={text => SetValue(text)} value={list.text} multiline={true}/>
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