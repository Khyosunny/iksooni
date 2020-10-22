import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

export default ({navigation}) => {
  
  const onPressClick = () => {
    navigation.navigate('AddNotePage');
  }

  return (
    <TouchableOpacity style={styles.writeBtn} onPress={onPressClick} >
      <Text style={styles.writeBtnText}>＋</Text>
    </TouchableOpacity>

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
})