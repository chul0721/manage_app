import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { weather } from '../components/WeatherData'
import { homeProps } from '../typings/homeProps'

const Home: React.FC<homeProps> = ({ temp, condition, latitude, longitude, city }: homeProps) => {
  return (
    <View style={styles.continer}>
      <View style={styles.weather}>
        <View style={styles.bigstate}>
          <Icon name={weather[condition].icon} size={50} color="#999" />
          <Text style={styles.state}>
            {weather[condition].title}
          </Text>
        </View>
        <Text style={styles.temp}>
          {city}, {Math.round(temp)}°C
        </Text>
        <Text style={styles.recommend}>
          {weather[condition].content[Math.floor(Math.random() * weather[condition].content.length)]}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  continer: {
    flex: 1,
    backgroundColor: 'black'
  },
  bigstate: {

  },
  weather: {
    alignItems: 'flex-end',
    top: 32,
    right: 20
  },
  temp: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24
  },
  state: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 26
  },
  recommend: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 17
  }
})

export default Home