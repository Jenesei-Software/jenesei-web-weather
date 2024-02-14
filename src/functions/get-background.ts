import ash from '/condition-codes/ash.webp'
import clear from '/condition-codes/clear.webp'
import cloudy from '/condition-codes/cloudy.webp'
import drizzle from '/condition-codes/drizzle.webp'
import dust from '/condition-codes/dust.webp'
import fog from '/condition-codes/fog.webp'
import haze from '/condition-codes/haze.webp'
import mist from '/condition-codes/mist.webp'
import rain from '/condition-codes/rain.webp'
import sandy from '/condition-codes/sandy.webp'
import snow from '/condition-codes/snow.webp'
import squall from '/condition-codes/squall.webp'
import thunderstorm from '/condition-codes/thunderstorm.webp'
import tornado from '/condition-codes/tornado.webp'

export function getBackground(text?: string): string {
  const lowercaseText = (text || '').toLowerCase()

  switch (true) {
    case lowercaseText.includes('ash'):
      return ash
    case lowercaseText.includes('clear'):
      return clear
    case lowercaseText.includes('cloudy'):
      return cloudy
    case lowercaseText.includes('drizzle'):
      return drizzle
    case lowercaseText.includes('dust'):
      return dust
    case lowercaseText.includes('fog'):
      return fog
    case lowercaseText.includes('haze'):
      return haze
    case lowercaseText.includes('mist'):
      return mist
    case lowercaseText.includes('rain'):
      return rain
    case lowercaseText.includes('sandy'):
      return sandy
    case lowercaseText.includes('snow'):
      return snow
    case lowercaseText.includes('squall'):
      return squall
    case lowercaseText.includes('thunderstorm'):
      return thunderstorm
    case lowercaseText.includes('tornado'):
      return tornado
    default:
      return clear
  }
}
