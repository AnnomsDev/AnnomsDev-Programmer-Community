import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faAward, faGlobe, faRadiation } from '@fortawesome/free-solid-svg-icons'
import './Programmer.css'

const eduIcon = <FontAwesomeIcon className='icon' icon={faGraduationCap} />
const badgeIcon = <FontAwesomeIcon className='icon' icon={faAward} />
const gloveIcon = <FontAwesomeIcon className='icon' icon={faGlobe} />
const xpIcon = <FontAwesomeIcon className='icon' icon={faRadiation} />

const Programmer = () => {
    return (
        <div className='programmer'>
            {/* <h1>from Programmer</h1> */}
            <div className="top-container">
                <img src="https://hrcdn.net/s3_pub/hr-avatars/99bf9b2b-3024-4976-8d35-479622e33bd9/150x150.png" alt="" />
                <h2>RD Rashal</h2>
                <p>@afasdf</p>
            </div>
            <div className="details">
                {eduIcon}<p><b>Education: </b> ITMO University</p>
                {badgeIcon}<p><b>Badge: </b>problemSolving, Python, Sql </p>
                {gloveIcon}<p><b>Country: </b> Bangladesh</p>
                {xpIcon}<p><b>XP: </b> 4055</p>
            </div>
            <button>Add To Clan</button>

        </div>
    );
};

export default Programmer;