import SunIcon from "../../assets/icon/weather/sun.svg";
// import SunCloudIcon from "../../assets/icon/weather/sun-cloud.svg";
// import SunCloudRainIcon from "../../assets/icon/weather/sun-cloud-rain.svg";
// import MoonIcon from "../../assets/icon/weather/moon.svg";
// import MoonCloudIcon from "../../assets/icon/weather/moon-cloud.svg";
// import MoonCloudThunderIcon from "../../assets/icon/weather/moon-cloud-thunder.svg";
// import MoonCloudStarsIcon from "../../assets/icon/weather/moon-cloud-stars.svg";
// import MoonCloudRainIcon from "../../assets/icon/weather/moon-cloud-rain.svg";
// import CloudThunderIcon from "../../assets/icon/weather/cloud-thunder.svg";
import CloudRainIcon from "../../assets/icon/weather/cloud-rain.svg";

export interface IWeatherIcon {
  WeatherText: string;
  day: boolean;
}
export const weatherIcon = (params: IWeatherIcon):string => {
  if (params.WeatherText == "Sunny") {
    return SunIcon;
  } else if (params.WeatherText == "Mostly Sunny") {
    return SunIcon;
  } else if (params.WeatherText == "Partly Sunny") {
    return SunIcon;
  } else if (params.WeatherText == "Intermittent Clouds" && params.day) {
    return SunIcon;
  } else if (params.WeatherText == "Hazy Sunshine") {
    return SunIcon;
  } else if (params.WeatherText == "Mostly Cloudy" && params.day) {
    return SunIcon;
  } else if (params.WeatherText == "Cloudy") {
    return CloudRainIcon;
  } else if (params.WeatherText == "Dreary (Overcast)") {
    return SunIcon;
  } else if (params.WeatherText == "Fog") {
    return SunIcon;
  } else if (params.WeatherText == "Showers") {
    return SunIcon;
  } else if (params.WeatherText == "Mostly Cloudy w/ Showers" && params.day) {
    return SunIcon;
  } else if (params.WeatherText == "Partly Sunny w/ Showers") {
    return SunIcon;
  } else if (params.WeatherText == "T-Storms") {
    return SunIcon;
  } else if (params.WeatherText == "Mostly Cloudy w/ T-Storms" && params.day) {
    return SunIcon;
  } else if (params.WeatherText == "Partly Sunny w/ T-Storms") {
    return SunIcon;
  } else if (params.WeatherText == "Rain") {
    return SunIcon;
  } else if (params.WeatherText == "Flurries") {
    return SunIcon;
  } else if (params.WeatherText == "Mostly Cloudy w/ Flurries" && params.day) {
    return SunIcon;
  } else if (params.WeatherText == "Partly Sunny w/ Flurries") {
    return SunIcon;
  } else if (params.WeatherText == "Snow") {
    return SunIcon;
  } else if (params.WeatherText == "Mostly Cloudy w/ Snow" && params.day) {
    return SunIcon;
  } else if (params.WeatherText == "Ice") {
    return SunIcon;
  } else if (params.WeatherText == "Sleet") {
    return SunIcon;
  } else if (params.WeatherText == "Freezing Rain") {
    return SunIcon;
  } else if (params.WeatherText == "Rain and Snow") {
    return SunIcon;
  } else if (params.WeatherText == "Hot") {
    return SunIcon;
  } else if (params.WeatherText == "Cold") {
    return SunIcon;
  } else if (params.WeatherText == "Windy") {
    return SunIcon;
  } else if (params.WeatherText == "Clear" && !params.day) {
    return SunIcon;
  } else if (params.WeatherText == "Mostly Clear" && !params.day) {
    return SunIcon;
  } else if (params.WeatherText == "Partly Cloudy" && !params.day) {
    return SunIcon;
  } else if (params.WeatherText == "Intermittent Clouds" && !params.day) {
    return SunIcon;
  } else if (params.WeatherText == "Hazy Moonlight" && !params.day) {
    return SunIcon;
  } else if (params.WeatherText == "Mostly Cloudy" && !params.day) {
    return SunIcon;
  } else if (params.WeatherText == "Partly Cloudy w/ Showers" && !params.day) {
    return SunIcon;
  } else if (params.WeatherText == "Mostly Cloudy w/ Showers" && !params.day) {
    return SunIcon;
  } else if (params.WeatherText == "Partly Cloudy w/ T-Storms" && !params.day) {
    return SunIcon;
  } else if (params.WeatherText == "Mostly Cloudy w/ T-Storms" && !params.day) {
    return SunIcon;
  } else if (params.WeatherText == "Mostly Cloudy w/ Flurries" && !params.day) {
    return SunIcon;
  } else if (params.WeatherText == "Mostly Cloudy w/ Snow" && !params.day) {
    return SunIcon;
  } else {
    return SunIcon;
  }
};
