import { useStore } from 'effector-react';
import GoogleMapReact from 'google-map-react';

import '../styles/search-here.css'

import { $showSearch } from '../../../functions/stores/show-search';
import { SearchHereDot } from '../molecules/search-here-dot';
import { SearchHereSettings } from '../molecules/search-here-settings';
import { $infoPermissionLocation } from '../../../functions/stores/info-location';

export const SearchHere = () => {
    const showSearch = useStore($showSearch);
    const infoPermissionLocation = useStore($infoPermissionLocation);
    return (
        <div className={showSearch ? "SearchHere-Show SearchHere" : "SearchHere-Hide SearchHere"}>
            <SearchHereSettings showSearch={showSearch} />
            <div className='SearchHere__Map'>
                {infoPermissionLocation &&
                    <GoogleMapReact
                        defaultCenter={{
                            lat: infoPermissionLocation.latitude ? infoPermissionLocation.latitude : 0,
                            lng: infoPermissionLocation.longitude ? infoPermissionLocation.longitude : 0
                        }}
                        defaultZoom={10}
                        draggable={false}
                        options={{ fullscreenControl: false, zoomControl: false }}
                    >
                        <SearchHereDot />
                    </GoogleMapReact>}
            </div>
        </div>
    );
};
