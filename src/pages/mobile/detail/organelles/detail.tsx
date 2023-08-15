import '../styles/detail.css'

import { DetailSettings } from '../molecules/detail-settings';
import { DetailToday } from '../molecules/detail-today';
import { DetailNext } from '../molecules/detail-next';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { setParamsURL } from '../../../../functions/stores/params-url';
import { fetchLocationByIp } from '../../../../functions/get-location/get-location-by-position';

export const Detail = () => {
    const { name } = useParams();
    useEffect(() => {
        if (name) {
            setParamsURL(name);
        } else {
            fetchLocationByIp()
        }
    }, [name])
    return (
        <div className='Detail'>
            <DetailSettings />
            <DetailToday />
            <DetailNext />
        </div>
    );
};
