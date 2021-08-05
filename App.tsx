import React from 'react'
import Loading from './components/Loading'
import * as Location from 'expo-location'
import { Alert, View, Text, StyleSheet } from 'react-native'

interface State {
  isLoading: boolean,
  condition: any,
  temp: any
}

const api_key = process.env.API_KEY

export default class extends React.Component {
  state: State = {
    isLoading: true,
    condition: null,
    temp: null
  }

  getData = async() => {
    try {
      const response = await Location.requestForegroundPermissionsAsync()
      console.log(response)
      const location = await Location.getCurrentPositionAsync()
      console.log(location)
    } catch (errror) {
      Alert.alert('위치 정보를 가져오는 것에 실패하였습니다.\n권한에 동의하여 주세요.')
    }

    this.setState({
      isLoading: false
    })
  }
  
  componentDidMount() {
    this.getData()
  }

  render() {
    const { isLoading } = this.state
    return isLoading ? (
      <Loading />
    ) : (
      <View style={styles.continer}>
        <Text style={styles.text}>
          ㅎㅇ
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 36
  }
})