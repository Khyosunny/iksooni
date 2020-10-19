import React from 'react';
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <Text>Main Page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
})