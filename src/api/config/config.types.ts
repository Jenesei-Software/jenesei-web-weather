export interface ConfigItem {
  appHost: string
  apiHost: string
  weatherApiHost: string
  openWeatherMapHost: string
  apiNinjaHost: string
  coreURL?: string
}

export interface Config extends ConfigItem {
  coreURL: string
}
