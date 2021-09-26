import React, { useEffect, useState } from 'react';
import Clan from '../Clan/Clan';
import Programmer from '../Programmer/Programmer';
import './Community.css'

const Community = () => {
    const [programmers, setProgrammers] = useState([])
    const [clan, setClan] = useState([])

    useEffect(() => {
        fetch('./fakeDB.json')
            .then(res => res.json())
            .then(data => setProgrammers(data))
    }, [])

    const handleAddToClan = programmer => {
        // return if member already exist in clan.
        if (clan.find(member => member.key === programmer.key)) return;
        setClan([...clan, programmer])
    }

    return (
        <div className='community'>
            <div className='programmer-container'>
                {
                    programmers.map(programmer => <Programmer
                        key={programmer.key}
                        programmer={programmer}
                        handleAddToClan={() => handleAddToClan(programmer)}
                    ></Programmer>)
                }
            </div>
            <Clan clan={clan}></Clan>
        </div>
    );
};

export default Community;