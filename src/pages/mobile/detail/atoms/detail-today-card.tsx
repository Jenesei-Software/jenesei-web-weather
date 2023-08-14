import { weatherIcon } from '../../../../ui/weather-icon/weather-icon'

import '../styles/detail-today-card.css'

export interface IDetailTodayCard {
    label: string
    type: number
    date: string
    toTime: boolean
    day: boolean
}
export const DetailTodayCard = (params: IDetailTodayCard) => {

    return (
        <div className={params.toTime ? 'DetailTodayCard-ToTime DetailTodayCard' : 'DetailTodayCard'}>
            <div className='DetailTodayCard__Label'>
                {params.label}
            </div>
            <img className='DetailTodayCard__Icon' src={weatherIcon({
                WeatherIcon: params.type,
                day: params.day
            })} alt="Weather Icon" />
            <div className='DetailTodayCard__Date'>
                {params.date}
            </div>
        </div>
    );
};
