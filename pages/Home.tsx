import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

type homeProps = {
  temp: number
  condition: string,
  latitude: number,
  longitude: number,
  city: string
}

type weatherProps = {
  title: string
  content: Array<string>
}

const weather: Record<string, weatherProps> = {
  Dust: {
    title: '황사',
    content: [
      '황사가 심하니 마스크를 챙기세요.',
      '미세먼지가 많으니 외출 시 마스크를 챙기세요.'
    ]
  },
  Thunderstorm: {
    title: '뇌우',
    content: [
      '뇌우가 쏟아지니 나가실 때 우산을 챙기세요.',
      '천둥소리와 함께 비가 내리니 우산을 챙기세요.'
    ]
  },
  Drizzle: {
    title: '이슬비',
    content: [
      '우산을 챙기시는걸 추천드려요.'
    ]
  },
  Rain: {
    title: '비',
    content: [
      '비가 내리니 외출 시 우산을 꼭 챙기세요.',
      '우산을 챙기세요!'
    ]
  },
  Snow: {
    title: '눈',
    content: [
      '혹시 모르니 모자를 쓰고 나가세요.',
      '따뜻하게 입고 외출하시는 것을 추천드려요.'
    ]
  },
  Atmosphere: {
    title: '알 수 없음',
    content: [
      '현재 상태를 알 수 없어요.'
    ]
  },
  Clear: {
    title: '맑음',
    content: [
      '산책하기 좋은 날씨에요.',
      '맑은 날씨에요.'
    ]
  },
  Clouds: {
    title: '구름',
    content: [
      '하늘에 구름이 많아요.'
    ]
  },
  Haze: {
    title: '연무',
    content: [
      '얕은 안개가 있으니 보행 및 운전 중에 조심하세요.'
    ]
  },
  Mist: {
    title: '박무',
    content: [
      '짙은 안개가 있으니 보행 및 운전 중에 조심하세요.'
    ]
  }
}

const Home: React.FC<homeProps> = ({ temp, condition, latitude, longitude, city }: homeProps) => {
  return (
    <View style={styles.continer}>
      <Text style={styles.text}>
        {city}, {Math.round(temp)}°C
      </Text>
      <Text style={styles.text}>
        {weather[condition].title}
      </Text>
      <Text style={styles.text}>
        {weather[condition].content[Math.floor(Math.random() * weather[condition].content.length)]}
      </Text>
    </View>
  )
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

export default Home