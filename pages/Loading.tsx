import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.loader}>데이터를 불러오는 중...</Text>
      <ActivityIndicator size="large" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loader: {
    color: 'white',
    fontSize: 20,
    paddingBottom: 15,
    fontWeight: 'bold'
  }
})
