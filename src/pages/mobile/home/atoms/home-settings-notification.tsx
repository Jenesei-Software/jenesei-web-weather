import { useStore } from 'effector-react';

import '../styles/home-settings-notification.css'

import NotificationIcon from '../../../../assets/icon/notification.svg'

import { $showNotification, setShowNotification } from '../../../../ui/stores/show-notification';
import { $infoNotification } from '../../../../ui/stores/info-notification';

export const HomeSettingsNotification = () => {
    const showNotification = useStore($showNotification);
    const infoNotification = useStore($infoNotification);
    const changeSetShowNotification = () => {
        setShowNotification(!showNotification);
    }
    return (
        infoNotification && infoNotification.data.length !== 0 && <img onClick={changeSetShowNotification} className='HomeSettingsNotification__Icon' src={NotificationIcon} alt="Notification icon" />
    );
};