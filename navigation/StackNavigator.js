import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from '../pages/MainPage';
import DetailPage from '../pages/DetailPage';
import MyPostListPage from '../pages/MyPostListPage';
import UpdatePage from '../pages/UpdatePage';
import NewPostPage from '../pages/NewPostPage';

const Stack = createStackNavigator();

export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MyPostListPage" component={MyPostListPage}/>
      <Stack.Screen name="UpdatePage" component={UpdatePage}/>
      <Stack.Screen name="NewPostPage" component={NewPostPage}/>
      <Stack.Screen name="MainPage" component={MainPage}/>
      <Stack.Screen name="DetailPage" component={DetailPage}/>
    </Stack.Navigator>
  )
}