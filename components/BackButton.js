import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default ({navigation}) => {
  return (
    <TouchableOpacity style={styles.backBtn} onPress={()=>{navigation.goBack()}}>
      <Text style={styles.backBtnText}>＜</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  backBtn: {
    width: 60,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#dbdbdb'
  },
  backBtnText: {
    fontSize: 18,
    lineHeight: 50,
    fontWeight: '700',
    textAlign: 'center',
    padding: 0
  },
})