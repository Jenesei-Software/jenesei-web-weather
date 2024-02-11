import ash from '@public/condition-codes/ash.webp'
import clear from '@public/condition-codes/clear.webp'
import cloudy from '@public/condition-codes/cloudy.webp'
import drizzle from '@public/condition-codes/drizzle.webp'
import dust from '@public/condition-codes/dust.webp'
import fog from '@public/condition-codes/fog.webp'
import haze from '@public/condition-codes/haze.webp'
import mist from '@public/condition-codes/mist.webp'
import rain from '@public/condition-codes/rain.webp'
import sandy from '@public/condition-codes/sandy.webp'
import snow from '@public/condition-codes/snow.webp'
import squall from '@public/condition-codes/squall.webp'
import thunderstorm from '@public/condition-codes/thunderstorm.webp'
import tornado from '@public/condition-codes/tornado.webp'

export function getBackground(text: string): string {
  const lowercaseText = text.toLowerCase()

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
