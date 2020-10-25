import React from 'react'
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native'
import back from '../assets/back.png'

export default ({navigation}) => {
  return (
    <TouchableOpacity style={styles.backBtn} onPress={()=>{navigation.goBack()}}>
      <Image source={back} style={styles.backBtnImg} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  backBtn: {
    width: 60,
    height: 50,
    paddingHorizontal: 15,
    borderRadius: 50,
  },
  backBtnImg: {
    width: 30,
    height: 30,
    marginTop: 11,
  },
})