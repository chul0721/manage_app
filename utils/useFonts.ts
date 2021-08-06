import * as Font from 'expo-font'

const useFonts = async () => {
  await Font.loadAsync({
    Fontello: require('../fontello/font/fontello.ttf')
  })
}

export default useFonts