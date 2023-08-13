import '../styles/home-info.css'

import HumIcon from '../../../../assets/icon/hum.svg'
import WindyIcon from '../../../../assets/icon/windy.svg'

export const HomeInfo = () => {
    return (
        <div className='HomeInfo'>
            <div className='HomeInfo__Background'>
            </div>
            <div className='HomeInfo__Container'>
                <div className='HomeInfo__Container__Date'>
                    Today, 12 September
                </div>
                <div className='HomeInfo__Container__Temp'>
                    29°
                </div>
                <div className='HomeInfo__Container__Label'>
                    Cloudy
                </div>
                <div className='HomeInfo__Container__Windy'>
                    <div className='HomeInfo__Container__Windy__Left-Section'>
                        <img className='HomeInfo__Container__Windy__Left-Section__Icon' src={WindyIcon} alt="Windy Icon" />
                        <div className='HomeInfo__Container__Windy__Left-Section__Label'>
                            Wind
                        </div>
                    </div>
                    <div className='HomeInfo__Container__Windy__Center-Section' />
                    <div className='HomeInfo__Container__Windy__Right-Section'>
                        10 km/h
                    </div>
                </div>
                <div className='HomeInfo__Container__Hum'>
                    <div className='HomeInfo__Container__Hum__Left-Section'>
                        <img className='HomeInfo__Container__Hum__Left-Section__Icon' src={HumIcon} alt="Windy Icon" />
                        <div className='HomeInfo__Container__Hum__Left-Section__Label'>
                            Hum
                        </div>
                    </div>
                    <div className='HomeInfo__Container__Hum__Center-Section' />
                    <div className='HomeInfo__Container__Hum__Right-Section'>
                        54 %
                    </div>
                </div>
            </div>
        </div>
    );
};
