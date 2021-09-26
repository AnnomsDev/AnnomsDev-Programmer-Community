import React, { useEffect, useState } from 'react';
import Clan from '../Clan/Clan';
import Programmer from '../Programmer/Programmer';
import './Community.css'

const Community = () => {
    const [programmers, setProgrammers] = useState([])

    useEffect(() => {
        fetch('./fakeDB.json')
            .then(res => res.json())
            .then(data => setProgrammers(data))
    }, [])



    return (
        <div className='community'>
            <div className='programmer-container'>
                {/* app programmers will be added here */}
                {
                    programmers.map(programmer => <Programmer
                        key={programmer.key}
                        programmer={programmer}
                    ></Programmer>)
                }

            </div>
            {/* clan: All selected programmer will be added here like cart */}
            <Clan></Clan>
        </div>
    );
};

export default Community;