import Icon1 from "../../assets/icon/weather/Sunny.svg";
import Icon2 from "../../assets/icon/weather/Mostly Sunny.svg";
import Icon3 from "../../assets/icon/weather/Partly Sunny.svg";
import Icon4 from "../../assets/icon/weather/Intermittent Clouds True.svg";
import Icon5 from "../../assets/icon/weather/Hazy Sunshine.svg";
import Icon6 from "../../assets/icon/weather/Mostly Cloudy True.svg";
import Icon7 from "../../assets/icon/weather/Cloudy.svg";
import Icon8 from "../../assets/icon/weather/Dreary (Overcast).svg";
import Icon9 from "../../assets/icon/weather/Fog.svg";
import Icon10 from "../../assets/icon/weather/Showers.svg";
import Icon11 from "../../assets/icon/weather/Mostly Cloudy w/Showers True.svg";
import Icon12 from "../../assets/icon/weather/Partly Sunny w/Showers.svg";
import Icon13 from "../../assets/icon/weather/T-Storms.svg";
import Icon14 from "../../assets/icon/weather/Mostly Cloudy w/T-Storms True.svg";
import Icon15 from "../../assets/icon/weather/Partly Sunny w/T-Storms.svg";
import Icon16 from "../../assets/icon/weather/Rain.svg";
import Icon17 from "../../assets/icon/weather/Flurries.svg";
import Icon18 from "../../assets/icon/weather/Mostly Cloudy w/Flurries True.svg";
import Icon19 from "../../assets/icon/weather/Partly Sunny w/Flurries.svg";
import Icon20 from "../../assets/icon/weather/Snow.svg";
import Icon21 from "../../assets/icon/weather/Mostly Cloudy w/Snow True.svg";
import Icon22 from "../../assets/icon/weather/Ice.svg";
import Icon23 from "../../assets/icon/weather/Sleet.svg";
import Icon24 from "../../assets/icon/weather/Freezing Rain.svg";
import Icon25 from "../../assets/icon/weather/Rain and Snow.svg";
import Icon26 from "../../assets/icon/weather/Hot.svg";
import Icon27 from "../../assets/icon/weather/Cold.svg";
import Icon28 from "../../assets/icon/weather/Windy.svg";
import Icon29 from "../../assets/icon/weather/Clear False.svg";
import Icon30 from "../../assets/icon/weather/Mostly Clear False.svg";
import Icon31 from "../../assets/icon/weather/Partly Cloudy False.svg";
import Icon32 from "../../assets/icon/weather/Intermittent Clouds False.svg";
import Icon33 from "../../assets/icon/weather/Hazy Moonlight False.svg";
import Icon34 from "../../assets/icon/weather/Mostly Cloudy False.svg";
import Icon35 from "../../assets/icon/weather/Partly Cloudy w/Showers False.svg";
import Icon36 from "../../assets/icon/weather/Mostly Cloudy w/Showers False.svg";
import Icon37 from "../../assets/icon/weather/Partly Cloudy w/T-Storms False.svg";
import Icon38 from "../../assets/icon/weather/Mostly Cloudy w/T-Storms False.svg";
import Icon39 from "../../assets/icon/weather/Mostly Cloudy w/Flurries False.svg";
import Icon40 from "../../assets/icon/weather/Mostly Cloudy w/Snow False.svg";


export interface IWeatherIcon {
  WeatherIcon: number;
  day: boolean;
}
export const weatherIcon = (params: IWeatherIcon): string => {
  if (params.WeatherIcon == 1) {
    return Icon1;
  } else if (params.WeatherIcon == 2) {
    return Icon2;
  } else if (params.WeatherIcon == 3) {
    return Icon3;
  } else if (params.WeatherIcon == 4 && params.day) {
    return Icon4;
  } else if (params.WeatherIcon == 5) {
    return Icon5;
  } else if (params.WeatherIcon == 6 && params.day) {
    return Icon6;
  } else if (params.WeatherIcon == 7) {
    return Icon7;
  } else if (params.WeatherIcon == 8) {
    return Icon8;
  } else if (params.WeatherIcon == 9) {
    return Icon9;
  } else if (params.WeatherIcon == 10) {
    return Icon10;
  } else if (params.WeatherIcon == 11 && params.day) {
    return Icon11;
  } else if (params.WeatherIcon == 12) {
    return Icon12;
  } else if (params.WeatherIcon == 13) {
    return Icon13;
  } else if (params.WeatherIcon == 14 && params.day) {
    return Icon14;
  } else if (params.WeatherIcon == 15) {
    return Icon15;
  } else if (params.WeatherIcon == 16) {
    return Icon16;
  } else if (params.WeatherIcon == 17) {
    return Icon17;
  } else if (params.WeatherIcon == 18 && params.day) {
    return Icon18;
  } else if (params.WeatherIcon == 19) {
    return Icon19;
  } else if (params.WeatherIcon == 20) {
    return Icon20;
  } else if (params.WeatherIcon == 21 && params.day) {
    return Icon21;
  } else if (params.WeatherIcon == 22) {
    return Icon22;
  } else if (params.WeatherIcon == 23) {
    return Icon23;
  } else if (params.WeatherIcon == 24) {
    return Icon24;
  } else if (params.WeatherIcon == 25) {
    return Icon25;
  } else if (params.WeatherIcon == 26) {
    return Icon26;
  } else if (params.WeatherIcon == 27) {
    return Icon27;
  } else if (params.WeatherIcon == 28) {
    return Icon28;
  } else if (params.WeatherIcon == 29 && !params.day) {
    return Icon29;
  } else if (params.WeatherIcon == 30 && !params.day) {
    return Icon30;
  } else if (params.WeatherIcon == 31 && !params.day) {
    return Icon31;
  } else if (params.WeatherIcon == 32 && !params.day) {
    return Icon32;
  } else if (params.WeatherIcon == 33 && !params.day) {
    return Icon33;
  } else if (params.WeatherIcon == 34 && !params.day) {
    return Icon34;
  } else if (params.WeatherIcon == 35 && !params.day) {
    return Icon35;
  } else if (params.WeatherIcon == 36 && !params.day) {
    return Icon36;
  } else if (params.WeatherIcon == 37 && !params.day) {
    return Icon37;
  } else if (params.WeatherIcon == 38 && !params.day) {
    return Icon38;
  } else if (params.WeatherIcon == 39 && !params.day) {
    return Icon39;
  } else if (params.WeatherIcon == 40 && !params.day) {
    return Icon40;
  } else {
    return Icon1;
  }
};
