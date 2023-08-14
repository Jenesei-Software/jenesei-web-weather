import { DetailTodayCard } from '../atoms/detail-today-card';
import { DetailTodayHeader } from '../atoms/detail-today-header';
import '../styles/detail-today.css'

export const DetailToday = () => {
    return (
        <div className='DetailToday'>
            <DetailTodayHeader />
            <div className='DetailToday__Cards'>
                <DetailTodayCard label={'24°C'} type={1} day={true} date={'10:00'} toTime={false} />
                <DetailTodayCard label={'24°C'} type={2} day={true} date={'10:00'} toTime={false} />
                <DetailTodayCard label={'24°C'} type={3} day={true} date={'10:00'} toTime={false} />
                <DetailTodayCard label={'24°C'} type={4} day={true} date={'10:00'} toTime={true} />
                <DetailTodayCard label={'24°C'} type={5} day={true} date={'10:00'} toTime={false} />
                <DetailTodayCard label={'24°C'} type={6} day={true} date={'10:00'} toTime={false} />
                <DetailTodayCard label={'24°C'} type={7} day={true} date={'10:00'} toTime={false} />
                <DetailTodayCard label={'24°C'} type={8} day={true} date={'10:00'} toTime={false} />
            </div>
        </div>
    );
};
