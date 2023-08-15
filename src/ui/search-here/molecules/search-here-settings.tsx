
import { setShowSearch } from '../../../functions/stores/show-search';
import '../styles/search-here-settings.css'

import BackIcon from '../../../assets/icon/back.svg';
import MicIcon from '../../../assets/icon/mic.svg';

// import { useLocalStorageList } from '../../use-local-storage-list/use-local-storage-list';
// import { LS_INFO_SEARCH_RESENT_LABEL } from '../../stores/info-search-resent';
import { useState } from 'react';

export interface ISearchHereSettings {
    showSearch: any
}
export const SearchHereSettings = (params: ISearchHereSettings) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // const [infoSearchResent, setInfoSearchResent] = useLocalStorageList(LS_INFO_SEARCH_RESENT_LABEL, [])
    const [value, setValue] = useState<string | null>(null)
    const changeShowSearch = () => {
        setShowSearch(!params.showSearch)
    }
    return (
        <div className='SearchHereSettings'>
            <div className='SearchHereSettings__Bar'>
                <img onClick={changeShowSearch} className='SearchHereSettings__Bar__Back' src={BackIcon} alt="Back" />
                <input value={value || ""} onChange={(event: any) => setValue(event.target.value)} placeholder="Search here" className='SearchHereSettings__Bar__Input' type="text" />
                <img className="SearchHereSettings__Bar__Mic" src={MicIcon} alt="Microphone" />
            </div>
            <div className='SearchHereSettings__asdasd'>

            </div>
            <div className='SearchHereSettings__Recent'>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        </div>
    );
};
