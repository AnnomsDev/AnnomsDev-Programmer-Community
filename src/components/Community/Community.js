import React from 'react';
import Clan from '../Clan/Clan';
import './Community.css'

const Community = () => {
    return (
        <div className='community'>
            <div className='programmer-container'>
                {/* app programmers will be added here */}
            </div>
            {/* clan: All selected programmer will be added here like cart */}
            <Clan></Clan>
        </div>
    );
};

export default Community;