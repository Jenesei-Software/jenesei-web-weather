
import { SpinningCircles } from 'react-loading-icons';
import { useStore } from 'effector-react';

import '../styles/search-here-settings-result.css'

import { $infoSearchResult, $infoSearchResultCheck } from '../../../functions/stores/info-search-result';
import { setLocation } from '../../../functions/stores/info-location';

export const SearchHereSettingsResult = () => {
    const infoSearchResult = useStore($infoSearchResult);
    const infoSearchResultCheck = useStore($infoSearchResultCheck);
    const clickItem = (item: any) => {
        setLocation(item)
    }
    return (
        infoSearchResultCheck == false ? <div className='SearchHereSettingsResult'>
            {infoSearchResult ?
                <>
                    <div className='SearchHereSettingsResult__Title'>Result search</div>
                    <div className='SearchHereSettingsResult__List'>
                        {(infoSearchResult && infoSearchResult.length !== 0) ? infoSearchResult.map((e: any,id:number) =>
                            <div key={id} className='SearchHereSettingsResult__List__Item' onClick={() => clickItem(e)}>
                                {/* <img src={ClockIcon} alt="Clock Icon" className='SearchHereSettingsResult__List__Item__Icon' /> */}
                                <div className='SearchHereSettingsResult__List__Item__Title'>
                                    {e?.EnglishName}, {e?.AdministrativeArea?.EnglishName}
                                </div>
                                <div className='SearchHereSettingsResult__List__Item__Temp'>

                                </div>
                            </div> 
                        ): 
                        <div className='SearchHereSettingsResult__List__NoData'>
                            No data
                        </div>
                        }
                    </div>
                </>
                : <SpinningCircles height="2em" fill="#008296" stroke="#000" strokeOpacity={.125} speed={1} />}
        </div> : null
    );
};
