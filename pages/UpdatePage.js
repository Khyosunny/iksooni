import React, { useEffect, useState, useContext } from 'react';
import { View, ScrollView, TextInput, Text, StyleSheet, TouchableOpacity, Keyboard, Alert, ToastAndroid } from 'react-native';
import { fire_db } from '../fbase'
import { StackActions } from '@react-navigation/native';

export default ({navigation,route}) => {
  const { uid, text, title } = route.params
  const [titleValue, setTitleValue] = useState(title);
  const [value, setValue] = useState(text);
  const [saved, setSaved] = useState(true);

  const showToast = () => {
    ToastAndroid.show('입력한 내용이 없어 노트를 저장하지 않았어요.', ToastAndroid.SHORT);
  };


  const onPress = () => {
    if(value === '' && titleValue === '') {
      const b = async () => {
        setSaved(true)
        await fire_db.collection('posts').doc(`${uid}`).delete()
        await navigation.popToTop()
        showToast()
      }
      b()
    } else {
      fire_db.collection('posts').doc(`${uid}`).update({
        title: titleValue,
        text: value
      })
      setSaved(true)
      
    }
  }
  
  useEffect(() => {
    const backAction = navigation.addListener('beforeRemove', (e) => {
      if(saved === false) {
        Keyboard.dismiss();
        e.preventDefault();
        Alert.alert(
          '',
          '변경사항을 저장할까요?',
          [
            { text: '취소', style: 'cancel', onPress: () => {} },
            { text: '저장 안 함', style: 'destructive', onPress: () => navigation.dispatch(e.data.action)},
            { text: '저장', style: 'destructive', onPress: () => {onPress(); } }
          ],
          { cancelable: false }
        );
      } else {
        navigation.dispatch(e.data.action)
      }
      // setSaved(true)
    })
    return () => backAction();
  },[saved, value, titleValue])



  console.log(saved)


  return (
    <View style={styles.container}>
      <View style={styles.topMenu}>
        <TouchableOpacity style={styles.saveBtn} onPress={onPress}>
          <Text style={styles.saveBtnText}>저장</Text>
        </TouchableOpacity>
      </View>
      <TextInput style={styles.titleInput} onChangeText={t => {setTitleValue(t); setSaved(false)}} value={titleValue} placeholder='제목이 없습니다'/>
      <TextInput style={styles.noteInput} onChangeText={t => {setValue(t); setSaved(false)}} value={value} placeholder='노트' multiline={true}/>
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
  },
  saveBtn: {
    width: 80,
    height: 50,
    borderRadius: 50,
    alignSelf: 'flex-end',
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