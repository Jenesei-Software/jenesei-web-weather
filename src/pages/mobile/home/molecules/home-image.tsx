import '../styles/home-image.css'

import { weatherIcon } from '../../../../functions/weather-icon/weather-icon';

interface IHomeImage {
    forecastNow?: any
}
export const HomeImage = (params: IHomeImage) => {
    return (
        <div className='HomeImage'>
            <img className='HomeImage__Icon' src={weatherIcon({
                WeatherIcon: params.forecastNow && params.forecastNow[0]?.WeatherIcon,
                day: params.forecastNow && params.forecastNow[0]?.IsDayTime
            })} alt="Cloud Icon" />
        </div>
    );
};
