import '../styles/home-report.css'

import { NavLink } from 'react-router-dom';

// import { $infoIpLocation } from '../../../../ui/stores/info-location';

import DropDownIcon from '../../../../assets/icon/drop-down-black.svg'
interface IHomeReport {
    infoIpLocation: any
}
export const HomeReport = (params: IHomeReport) => {
    return (
        <NavLink to={`/detail/${params.infoIpLocation?.AdministrativeArea?.LocalizedName}`} className='HomeReport'>
            <div className='HomeReport__Title'>
                Forecast report
            </div>
            <img className='HomeReport__DropIcon' src={DropDownIcon} alt="Drop Down Icon" />
        </NavLink>
    );
};
