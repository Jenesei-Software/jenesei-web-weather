
import '../styles/search-here-settings-resent.css'

export interface ISearchHereSettingsResent {
    infoSearchResent?: any
}
export const SearchHereSettingsResent = (params: ISearchHereSettingsResent) => {

    return (
        params.infoSearchResent ? <div className='SearchHereSettingsResent'>
            <div className='SearchHereSettingsResent__Title'>Resent search</div>
            <div className='SearchHereSettingsResent__List'>
                {params.infoSearchResent.map((e: any) =>
                    <div className='SearchHereSettingsResent__List__Item'>
                        {e}
                    </div>
                )}
            </div>
        </div> : null
    );
};
