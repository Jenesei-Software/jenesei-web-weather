import { API_NINJA_API_KEY } from '@api/api-ninja'
import { config } from '@api/config'
import { WEATHER_API_KEY } from '@api/weather/weather.constants'
import axios from 'axios'

const defaultOptions = {
  baseURL: config.apiHost,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
}

export const axiosInstance = axios.create(defaultOptions)

const weatherApiHostOptions = {
  baseURL: config.weatherApiHost,
  headers: {
    key: WEATHER_API_KEY,
  },
}

export const weatherApiHostAxiosInstance = axios.create(weatherApiHostOptions)

const openWeatherMapHostOptions = {
  baseURL: config.openWeatherMapHost,
}

export const openWeatherMapHostAxiosInstance = axios.create(
  openWeatherMapHostOptions
)

const apiNinjaHostOptions = {
  baseURL: config.apiNinjaHost,
  headers: {
    'X-Api-Key': API_NINJA_API_KEY,
  },
}

export const apiNinjaHostAxiosInstance = axios.create(apiNinjaHostOptions)
