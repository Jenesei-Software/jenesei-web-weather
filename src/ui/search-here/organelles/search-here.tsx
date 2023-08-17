import { useStore } from 'effector-react';

import '../styles/search-here.css'

import { $showSearch } from '../../../functions/stores/show-search';
import { SearchHereSettings } from '../molecules/search-here-settings';
import { SearchHereMap } from '../molecules/search-here-map';

export const SearchHere = () => {
    const showSearch = useStore($showSearch);
    return (
        <div className={showSearch ? "SearchHere-Show SearchHere" : "SearchHere-Hide SearchHere"}>
            <SearchHereSettings />
            <SearchHereMap/>
        </div>
    );
};
