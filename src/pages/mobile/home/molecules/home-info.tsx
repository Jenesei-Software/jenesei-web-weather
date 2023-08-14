import '../styles/home-info.css'

import HumIcon from '../../../../assets/icon/hum.svg'
import WindyIcon from '../../../../assets/icon/windy.svg'

interface IHomeInfo {
    forecastNow: any
}
export const HomeInfo = (params:IHomeInfo) => {
    const nowDate = () => {
        const options: any = { day: 'numeric', month: 'long' };
        return "Today, " + new Date().toLocaleDateString('en-US', options);
    }
    return (
        <div className='HomeInfo'>
            <div className='HomeInfo__Background'>
            </div>
            <div className='HomeInfo__Container'>
                <div className='HomeInfo__Container__Date'>
                    {nowDate()}
                </div>
                <div className='HomeInfo__Container__Temp'>
                    <div className='HomeInfo__Container__Temp__Number'>
                        {params.forecastNow[0]?.Temperature?.Metric?.Value}
                    </div>
                    <div className='HomeInfo__Container__Temp__Symbol'>
                        °
                    </div>
                </div>
                <div className='HomeInfo__Container__Label'>
                    Cloudy
                </div>
                <div className='HomeInfo__Container__WindyAndHum'>
                    <div className='HomeInfo__Container__Windy'>
                        <div className='HomeInfo__Container__Windy__Left-Section'>
                            <img className='HomeInfo__Container__Windy__Left-Section__Icon' src={WindyIcon} alt="Windy Icon" />
                            <div className='HomeInfo__Container__Windy__Left-Section__Label'>
                                Wind
                            </div>
                        </div>
                        <div className='HomeInfo__Container__Windy__Center-Section' />
                        <div className='HomeInfo__Container__Windy__Right-Section'>
                            {params.forecastNow[0]?.Wind?.Speed?.Metric?.Value} km/h
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
                            {params.forecastNow[0]?.RelativeHumidity} %
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
