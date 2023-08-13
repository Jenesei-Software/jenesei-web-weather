import { useParams } from 'react-router-dom';
import { useStore } from 'effector-react';
import { useEffect } from 'react';

import '../styles/home.css'

import { HomeSettings } from '../molecules/home-settings';
import { HomeImage } from '../molecules/home-image';
import { HomeInfo } from '../molecules/home-info';
import { HomeReport } from '../molecules/home-report';

import { $infoLocation, setInfoLocation } from '../../../../ui/stores/info-location';

export const Home = () => {
    const infoLocation = useStore($infoLocation);
    const { name } = useParams();
    useEffect(() => {
        if (name) {
            setInfoLocation({ label: name, type: "sun" });
        }
    }, [name])
    return (
        <div className='Home'>
            <HomeSettings />
            <HomeImage />
            <HomeInfo />
            <HomeReport />
            {infoLocation?.label}
        </div>
    );
};
