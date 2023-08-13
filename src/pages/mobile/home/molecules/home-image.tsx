import { useStore } from 'effector-react';

import { $infoLocation } from '../../../../ui/stores/info-location';

import '../styles/home-image.css'

import SunIcon from '../../../../assets/icon/weather/sun.svg'
import SunCloudIcon from '../../../../assets/icon/weather/sun-cloud.svg'
import SunCloudRainIcon from '../../../../assets/icon/weather/sun-cloud-rain.svg'
import MoonIcon from '../../../../assets/icon/weather/moon.svg'
import MoonCloudIcon from '../../../../assets/icon/weather/moon-cloud.svg'
import MoonCloudThunderIcon from '../../../../assets/icon/weather/moon-cloud-thunder.svg'
import MoonCloudStarsIcon from '../../../../assets/icon/weather/moon-cloud-stars.svg'
import MoonCloudRainIcon from '../../../../assets/icon/weather/moon-cloud-rain.svg'
import CloudThunderIcon from '../../../../assets/icon/weather/cloud-thunder.svg'
import CloudRainIcon from '../../../../assets/icon/weather/cloud-rain.svg'
import { useEffect, useState } from 'react';


export const HomeImage = () => {
    const infoLocation = useStore($infoLocation);
    const [icon, setIcon] = useState<string>(SunIcon)
    useEffect(() => {
        const type = infoLocation?.type;
        if (type == "sun") {
            setIcon(SunIcon)
        } else if (type == "sun-cloud") {
            setIcon(SunCloudIcon)
        } else if (type == "sun-cloud-rain") {
            setIcon(SunCloudRainIcon)
        } else if (type == "moon") {
            setIcon(MoonIcon)
        } else if (type == "moon-cloud") {
            setIcon(MoonCloudIcon)
        } else if (type == "moon-cloud-thunder") {
            setIcon(MoonCloudThunderIcon)
        } else if (type == "moon-cloud-stars") {
            setIcon(MoonCloudStarsIcon)
        } else if (type == "moon-cloud-rain") {
            setIcon(MoonCloudRainIcon)
        } else if (type == "cloud-thunder") {
            setIcon(CloudThunderIcon)
        } else if (type == "cloud-rain") {
            setIcon(CloudRainIcon)
        } else {
            setIcon(SunIcon)
        }

    }, [infoLocation])
    return (
        <div className='HomeImage'>
            <img className='HomeImage__Icon' src={icon} alt="Cloud Icon" />
        </div>
    );
};
