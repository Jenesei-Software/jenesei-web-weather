import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useStore } from 'effector-react';

import '../styles/home.css'

import { HomeSettings } from '../molecules/home-settings';
import { HomeImage } from '../molecules/home-image';
import { HomeInfo } from '../molecules/home-info';
import { HomeReport } from '../molecules/home-report';
import { setParamsURL } from '../../../../ui/stores/params-url';
import { fetchLocationByIp } from '../../../../ui/get-location/get-location-by-ip';
import { $infoIpLocation } from '../../../../ui/stores/info-location';
import { $forecastNow } from '../../../../ui/stores/info-forecast';


export const Home = () => {
    const infoIpLocation = useStore($infoIpLocation);
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
        infoIpLocation && forecastNow && <div className='Home'>
            <HomeSettings infoIpLocation={infoIpLocation} />
            <HomeImage forecastNow={forecastNow} />
            <HomeInfo forecastNow={forecastNow} />
            <HomeReport infoIpLocation={infoIpLocation} />
        </div>
    );
};
