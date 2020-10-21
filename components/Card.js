import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { fire_db } from '../fbase'


export default ({item,itemID,navigation}) => {

  const onDelete = () => {
    Alert.alert(
      '경고',
      '삭제하시겠습니까?',
      [
        {
          text: 'NO', onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
        },
        {
          text: 'YES', onPress: () => fire_db.collection('posts').doc(`${itemID}`).delete()
        }
      ],
      { cancelable: false }
    )
  }


  return (
    <TouchableOpacity style={styles.card} onPress={()=>{navigation.navigate('UpdatePage',item)}}>
    {
      item.title == '' ?
       null : <Text style={styles.cardTitle} numberOfLines={3}>{item.title}</Text>
    }
    {
      item.text == '' ?
      null : <Text style={styles.cardText} numberOfLines={3}>{item.text}</Text>
    }
      <View style={styles.box}>
        <Text style={styles.cardDate}>{item.date}</Text>
        <TouchableOpacity style={styles.DeleteBtn} onPress={onDelete}>
          <Text style={styles.DeleteBtnText}>삭제</Text>
        </TouchableOpacity>
      </View>
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
  cardTitle: {
    fontSize: 18,
    fontWeight: '700'
  },
  cardText: {
    fontSize: 16
  },
  box: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  cardDate: {
    color: '#999',
    marginTop: 10,
  },
  DeleteBtn: {
    padding: 10,
    backgroundColor: 'pink',
    borderRadius: 10,
    zIndex: 5,
  },
})