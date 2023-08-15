import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useStore } from 'effector-react';

import '../styles/home.css'

import { HomeSettings } from '../molecules/home-settings';
import { HomeImage } from '../molecules/home-image';
import { HomeInfo } from '../molecules/home-info';
import { HomeReport } from '../molecules/home-report';
import { setParamsURL } from '../../../../functions/stores/params-url';
import { $infoLocation } from '../../../../functions/stores/info-location';
import { $forecastNow } from '../../../../functions/stores/info-forecast';
import { fetchLocationByIp } from '../../../../functions/get-location/get-location-by-position';


export const Home = () => {
    const infoLocation = useStore($infoLocation);
    const forecastNow = useStore($forecastNow);
    const { name } = useParams();
    useEffect(() => {
        if (name) {
            setParamsURL(name);
        } else {
            fetchLocationByIp()
        }
    }, [name])
    return (
        <div className='Home'>
            <HomeSettings infoLocation={infoLocation} />
            <HomeImage forecastNow={forecastNow} />
            <HomeInfo forecastNow={forecastNow} />
            <HomeReport infoLocation={infoLocation} />
        </div>
    );
};
