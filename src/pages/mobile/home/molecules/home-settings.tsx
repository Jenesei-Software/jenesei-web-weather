import { HomeSettingsChoice } from '../atoms/home-settings-choice';
import { HomeSettingsNotification } from '../atoms/home-settings-notification';
import '../styles/home-settings.css'

export const HomeSettings = () => {
    return (
        <div className='HomeSettings'>
            <HomeSettingsChoice />
            <HomeSettingsNotification />
        </div>
    );
};
