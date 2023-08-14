import '../styles/home-image.css'

import { weatherIcon } from '../../../../ui/weather-icon/weather-icon';

interface IHomeImage {
    forecastNow: any
}
export const HomeImage = (params: IHomeImage) => {
    return (
        <div className='HomeImage'>
            <img className='HomeImage__Icon' src={weatherIcon({
                WeatherText: params.forecastNow[0].WeatherText,
                day: params.forecastNow[0].IsDayTime
            })} alt="Cloud Icon" />
        </div>
    );
};
