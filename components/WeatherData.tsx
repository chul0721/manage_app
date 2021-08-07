import { weatherProps } from '../typings/weatherProps'

export const weather: Record<string, weatherProps> = {
  Dust: {
    title: '황사',
    content: [
      '황사가 심하니 마스크를 챙기세요.',
      '미세먼지가 많으니 외출 시 마스크를 챙기세요.'
    ],
    icon: 'weather-fog'
  },
  Thunderstorm: {
    title: '뇌우',
    content: [
      '뇌우가 쏟아지니 나가실 때 우산을 챙기세요.',
      '천둥소리와 함께 비가 내리니 우산을 챙기세요.'
    ],
    icon: 'weather-lightning-rainy'
  },
  Drizzle: {
    title: '이슬비',
    content: [
      '우산을 챙기시는걸 추천드려요.'
    ],
    icon: 'weather-rainy'
  },
  Rain: {
    title: '비',
    content: [
      '비가 내리니 외출 시 우산을 꼭 챙기세요.',
      '우산을 챙기세요!'
    ],
    icon: 'weather-hail'
  },
  Snow: {
    title: '눈',
    content: [
      '혹시 모르니 모자를 쓰고 나가세요.',
      '따뜻하게 입고 외출하시는 것을 추천드려요.'
    ],
    icon: 'weather-snowy'
  },
  Clear: {
    title: '맑음',
    content: [
      '산책하기 좋은 날씨에요.',
      '맑은 날씨에요.'
    ],
    icon: 'weather-sunny'
  },
  Clouds: {
    title: '구름',
    content: [
      '하늘에 구름이 많아요.'
    ],
    icon: 'weather-cloudy'
  },
  Haze: {
    title: '연무',
    content: [
      '얕은 안개가 있으니 보행 및 운전 중에 조심하세요.'
    ],
    icon: 'weather-fog'
  },
  Mist: {
    title: '박무',
    content: [
      '짙은 안개가 있으니 보행 및 운전 중에 조심하세요.'
    ],
    icon: 'weather-fog'
  },
  Smoke: {
    title: '연기',
    content: [
      '연기가 있으니 보행 및 운전 중에 조심하세요.'
    ],
    icon: 'weather-fog'
  },
  Fog: {
    title: '안개',
    content: [
      '안개가 있으니 보행 및 운전 중에 조심하세요.'
    ],
    icon: 'weather-fog'
  },
  Extreme: {
    title: '극한',
    content: [
      '극한의 추위나 더위, 혹은 바람이나 자연재해가 일어나고 있어요.'
    ],
    icon: 'weather-tornado'
  },
  Additional: {
    title: '알 수 없음',
    content: [
      '현재 날씨의 상태를 알 수 없어요.'
    ],
    icon: ''
  }
}