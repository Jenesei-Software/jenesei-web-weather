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

const weatherOptions = {
  baseURL: config.weatherHost,
  headers: {
    key: WEATHER_API_KEY,
  },
}

export const weatherAxiosInstance = axios.create(weatherOptions)

const ipOptions = {
  baseURL: config.ipHost,
  headers: {
    'Content-Type': 'application/json',
  },
}

export const ipAxiosInstance = axios.create(ipOptions)
