import React from 'react'
import Loading from './pages/Loading'
import * as Location from 'expo-location'
import { Alert } from 'react-native'
import Home from './pages/Home'
import axios from 'axios'

interface State {
  isLoading: boolean
  condition: string
  temp: number
  latitude: number
  longitude: number,
  city: string
}

const api_key = process.env.API_KEY

export default class App extends React.Component {
  state: State = {
    isLoading: true,
    condition: '',
    temp: 0,
    latitude: 0,
    longitude: 0,
    city: ''
  }

  getWeather = async (latitude: number, longitude: number) => {
    const {
      data: {
        main: { temp },
        weather,
        name
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`
    )
    this.setState({
      isLoading: false,
      condition: weather[0].main,
      temp,
      city: name
    })
  }

  getData = async () => {
    try {
      await Location.requestForegroundPermissionsAsync()
      const {
        coords: { latitude, longitude }
      } = await Location.getCurrentPositionAsync()
      this.getWeather(latitude, longitude)
      this.setState({
        latitude: latitude,
        longitude: longitude
      })
    } catch (errror) {
      Alert.alert('위치 정보를 가져오는 것에 실패하였습니다.\n권한에 동의하여 주세요.')
    }
  }

  componentDidMount() {
    this.getData()
  }

  render() {
    const { isLoading, temp, condition, latitude, longitude, city } = this.state
    return isLoading ? (
      <Loading />
    ) : (
      <Home
        temp={temp}
        condition={condition}
        latitude={latitude}
        longitude={longitude}
        city={city}
      />
    )
  }
}