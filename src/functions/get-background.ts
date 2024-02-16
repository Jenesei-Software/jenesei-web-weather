import ash from '/condition/ash.webp'
import clear from '/condition/clear.webp'
import cloudy from '/condition/cloudy.webp'
import drizzle from '/condition/drizzle.webp'
import dust from '/condition/dust.webp'
import fog from '/condition/fog.webp'
import haze from '/condition/haze.webp'
import mist from '/condition/mist.webp'
import rain from '/condition/rain.webp'
import sandy from '/condition/sandy.webp'
import snow from '/condition/snow.webp'
import squall from '/condition/squall.webp'
import thunderstorm from '/condition/thunderstorm.webp'
import tornado from '/condition/tornado.webp'

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
