import React, { useState, useRef, useContext, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, TextInput, Keyboard, Alert, BackHandler } from 'react-native';
import { fire_db } from '../fbase'
import { DataContext } from '../App'
import BackButton from '../components/BackButton'

export default ({navigation}) => {
  const post = useContext(DataContext)
  const { data } = post

  const [titleValue, setTitleValue] = useState('');
  const [value, setValue] = useState('');
  const [saved, setSaved] = useState(true);
  const undefineeValue = Boolean(value)
  const undefineeTitleValue = Boolean(titleValue)

  const now = new Date();





  const listSave = async () => {
    await fire_db.collection('posts').add({
      title: titleValue,
      text: value,
      date: `${now.getFullYear()}년 ${now.getMonth()+1}월 ${now.getDate()}일`,
      createdTime: Date.now(),
    })
  }

  const onPress = async () => {
    setSaved(true)
    await listSave();
    await navigation.popToTop()
  }

 
  useEffect(() => {
    const backAction = navigation.addListener('beforeRemove', (e) => {
      if((undefineeValue === true || undefineeTitleValue === true) && saved === false) {
        Keyboard.dismiss();
        e.preventDefault();
        Alert.alert(
          '',
          '변경사항을 저장할까요?',
          [
            { text: '취소', style: 'cancel', onPress: () => {} },
            { text: '저장 안 함', style: 'destructive', onPress: () => navigation.dispatch(e.data.action)},
            { text: '저장', style: 'cancel', onPress: () => {onPress()} }
          ],
        );
      } else {
        navigation.dispatch(e.data.action)
      }
    })
    return () => backAction();
  },[saved, value, undefineeValue, titleValue, undefineeTitleValue])


  return (
    <View style={styles.container}>
      <View style={styles.topMenu}>
        <BackButton navigation={navigation}/>
        <TouchableOpacity style={styles.saveBtn} onPress={onPress}>
          <Text style={styles.saveBtnText}>저장</Text>
        </TouchableOpacity>
      </View>
      <TextInput style={styles.titleInput} onChangeText={text => {setTitleValue(text); setSaved(false)}} value={titleValue} placeholder='제목'/>
      <TextInput autoFocus={true} style={styles.noteInput} onChangeText={text => {setValue(text); setSaved(false)}} value={value} placeholder='노트' multiline={true}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topMenu: {
    borderBottomWidth: 1,
    borderColor: '#dbdbdb',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
  saveBtn: {
    width: 60,
    height: 50,
    borderRadius: 50,
    backgroundColor: '#dbdbdb'

  },
  saveBtnText: {
    fontSize: 20,
    lineHeight: 50,
    fontWeight: '700',
    textAlign: 'center'
  },
  titleInput: {
    fontSize: 22,
    fontWeight: '900',
    width: '100%',
    height: 50,
    // textAlignVertical: 'top',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  noteInput: {
    fontSize: 16,
    width: '100%',
    height: '100%',
    padding: 20,
    backgroundColor: '#fff',
    textAlignVertical: 'top',
  }
})