import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default ({item,i,navigation}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate('WritePage',item)}}>
      <Text style={styles.cardText} numberOfLines={3}>{item.text}</Text>
      <Text style={styles.cardDate}>{item.date}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  cardText: {
    fontSize: 16
  },
  cardDate: {
    color: '#999',
    marginTop: 10,
  }
})