import '../styles/detail-settings-back.css'

import ArrowLeftIcon from '../../../../assets/icon/arrow-left.svg'

import { useStore } from 'effector-react';
import { NavLink } from 'react-router-dom';

import { $infoIpLocation } from '../../../../ui/stores/info-location';

export const DetailSettingsBack = () => {
    const infoIpLocation = useStore($infoIpLocation);
    return (
        <NavLink to={`/home/${infoIpLocation?.AdministrativeArea?.LocalizedName}`} className='DetailSettingsBack'>
            <img src={ArrowLeftIcon} className='DetailSettingsBack__Icon' alt="" />
            <div className='DetailSettingsBack__Title'>
                Back
            </div>
        </NavLink>
    );
};
