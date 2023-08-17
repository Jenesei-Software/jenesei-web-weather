
import { useEffect, useState } from 'react';

import '../styles/search-here-settings.css'

import BackIcon from '../../../assets/icon/back.svg';
import MicIcon from '../../../assets/icon/mic.svg';

import { ACCU_WEATHER_API_KEY } from '../../../functions/axios-instance/axios-instance';
import { getLocationBySearchAccuWeather } from '../../../functions/get-location/get-location-by-search';
import { setShowSearch } from '../../../functions/stores/show-search';
import { SearchHereSettingsResult } from '../atoms/search-here-settings-result';
import { SearchHereSettingsResent } from '../atoms/search-here-settings-resent';
import { setInfoSearchResult, setInfoSearchResultCheck } from '../../../functions/stores/info-search-result';

// import { useLocalStorageList } from '../../use-local-storage-list/use-local-storage-list';
// import { LS_INFO_SEARCH_RESENT_LABEL } from '../../stores/info-search-resent';

export interface ISearchHereSettings {
    showSearch: any
}
export const SearchHereSettings = (params: ISearchHereSettings) => {
    const [value, setValue] = useState<string | null>(null)
    // const [infoSearchResent, setInfoSearchResent] = useLocalStorageList(LS_INFO_SEARCH_RESENT_LABEL, [])
    const changeShowSearch = () => {
        setShowSearch(!params.showSearch)
    }
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if(value && value !== ""){
                setInfoSearchResultCheck(true)
                getLocationBySearchAccuWeather(value, ACCU_WEATHER_API_KEY);
            }else{
                setInfoSearchResult(null)
            }
        }, 2000)

        return () => {
            clearTimeout(delayDebounceFn)
        }
    }, [value])
    return (
        <div className='SearchHereSettings'>
            <div className='SearchHereSettings__Bar'>
                <img onClick={changeShowSearch} className='SearchHereSettings__Bar__Back' src={BackIcon} alt="Back" />
                <input value={value || ""} onChange={(event: any) => setValue(event.target.value)} placeholder="Search here" className='SearchHereSettings__Bar__Input' type="text" />
                <img className="SearchHereSettings__Bar__Mic" src={MicIcon} alt="Microphone" />
            </div>
            <SearchHereSettingsResult />
            <SearchHereSettingsResent />
        </div>
    );
};
