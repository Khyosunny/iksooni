import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from '../pages/MainPage';
import DetailPage from '../pages/DetailPage';
import NoteListPage from '../pages/NoteListPage';
import UpdatePage from '../pages/UpdatePage';
import AddNotePage from '../pages/AddNotePage';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name="NoteListPage" component={NoteListPage}/>
      <Stack.Screen name="UpdatePage" component={UpdatePage}/>
      <Stack.Screen name="AddNotePage" component={AddNotePage}/>
      <Stack.Screen name="MainPage" component={MainPage}/>
      <Stack.Screen name="DetailPage" component={DetailPage}/>
    </Stack.Navigator>
  )
}