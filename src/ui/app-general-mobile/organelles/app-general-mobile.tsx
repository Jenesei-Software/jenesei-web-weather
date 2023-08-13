import { Outlet } from 'react-router-dom';

import '../styles/app-general-mobile.css'

import WallpaperLeftLine from '../../../assets/images/wallpaper-left-line.svg'
import WallpaperRightLine from '../../../assets/images/wallpaper-right-line.svg'

export const AppGeneralMobile = () => {
    return (
        <div className='AppGeneralMobile'>
            <img src={WallpaperLeftLine} className='AppGeneralMobile__WallpaperLeftLine' alt="Wallpaper Left Line" />
            <img src={WallpaperRightLine} className='AppGeneralMobile__WallpaperRightLine' alt="Wallpaper Right Line" />
            <Outlet />
        </div>
    );
};
