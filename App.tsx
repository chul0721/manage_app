import React from 'react'
import Loading from './components/Loading'
import * as Location from 'expo-location'
import { Alert } from 'react-native'

export default class extends React.Component {
  getLocation = async() => {
    try {
      const response = await Location.requestForegroundPermissionsAsync()
      console.log(response)
      const location = await Location.getCurrentPositionAsync()
      console.log(location)
    } catch (errror) {
      Alert.alert('위치 정보를 가져오는 것에 실패하였습니다.\n권한에 동의하여 주세요.')
    }
  }

  componentDidMount() {
    this.getLocation()
  }

  render() {
    return <Loading />
  }
}
