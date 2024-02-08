export interface ConfigItem {
  appHost: string
  apiHost: string
  weatherHost: string
  sunriseSunsetHost: string
  ipHost: string
  coreURL?: string
}

export interface Config extends ConfigItem {
  coreURL: string
}
