import React from 'react';
import Member from '../Member/Member';
import './Clan.css'

const Clan = (props) => {
    const { clan } = props;

    let totalXp = 0;

    for (const programmer of clan) {
        totalXp += programmer.xp;
    }



    return (
        <div className='clan'>
            <h1>Your Clan</h1>
            <hr />
            <h3>Mambers: {clan.length}</h3>
            <h3>Total XP: {totalXp}</h3>
            <div className="memmbers-containner">
                {
                    clan.map(member => <Member
                    key={member.key}
                    member ={member}
                    ></Member>)
                }


        </div>
        </div >
    );
};

export default Clan;