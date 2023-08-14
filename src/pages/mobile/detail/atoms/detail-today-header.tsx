import '../styles/detail-today-header.css'

export const DetailTodayHeader = () => {
    const getFormattedDate = () => {
        const options: any = { month: 'short', day: 'numeric' };
        const date = new Date();
        const formattedDate = date.toLocaleDateString('en-US', options);
        return formattedDate.replace(/\s/, ',');
    }
    return (
        <div className='DetailTodayHeader'>
            <div className='DetailTodayHeader__Label'>
                Today
            </div>
            <div className='DetailTodayHeader__Today'>
                {getFormattedDate()}
            </div>
        </div>
    );
};
