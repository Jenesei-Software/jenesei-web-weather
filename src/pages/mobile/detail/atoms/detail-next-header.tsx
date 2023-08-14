import '../styles/detail-next-header.css'

import CalendarIcon from '../../../../assets/icon/calendar.svg'
export const DetailNextHeader = () => {
    return (
        <div className='DetailNextHeader'>
            <div className='DetailNextHeader__Label'>
                Next Forecast
            </div>
            <img className='DetailNextHeader__Icon' src={CalendarIcon} alt="Calendar Icon" />
        </div>
    );
};
