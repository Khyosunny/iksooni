import React, { useContext, useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native'
import StackNavigator from './navigation/StackNavigator'
import { fire_db }from './fbase'

export const DataContext = React.createContext()

export default () => {
  const getData = async () => {
     await fire_db.collection('posts').onSnapshot(response => {
      const result = response.docs.map((item) => ({
        uid: item.id,
        ...item.data()
      }))
      setData(result)
      console.log(result)
    })
  }
  const [data,setData] = useState([])

  useEffect(() => {
    getData()
  },[])

  return (
    <DataContext.Provider value={{data,setData}}>
      <NavigationContainer>
        <StatusBar barStyle="dark-content" />
          <StackNavigator />
      </NavigationContainer>
    </DataContext.Provider>
  );
};

