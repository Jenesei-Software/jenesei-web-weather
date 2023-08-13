import { useParams } from 'react-router-dom';

import '../styles/detail.css'

export const Detail = () => {
    const { name } = useParams();
    return (
        <div>
            {name}
        </div>
    );
};
