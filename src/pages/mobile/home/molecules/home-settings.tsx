import { HomeSettingsChoice } from '../atoms/home-settings-choice';
import { HomeSettingsNotification } from '../atoms/home-settings-notification';
import '../styles/home-settings.css'
interface IHomeSettings {
    infoIpLocation: any
}
export const HomeSettings = (params:IHomeSettings) => {
    return (
        <div className='HomeSettings'>
            <HomeSettingsChoice infoIpLocation={params.infoIpLocation} />
            <HomeSettingsNotification />
        </div>
    );
};
