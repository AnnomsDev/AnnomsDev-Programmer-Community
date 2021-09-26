import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faAward, faGlobe, faRadiation } from '@fortawesome/free-solid-svg-icons'
import './Programmer.css'

const eduIcon = <FontAwesomeIcon className='icon' icon={faGraduationCap} />
const badgeIcon = <FontAwesomeIcon className='icon' icon={faAward} />
const gloveIcon = <FontAwesomeIcon className='icon' icon={faGlobe} />
const xpIcon = <FontAwesomeIcon className='icon' icon={faRadiation} />

const Programmer = (props) => {
    const { name, username, country, education, badges, xp, img} = props.programmer
    const {handleAddToClan} = props

    return (
        <div className='programmer'>
            <div className="top-container">
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>{username}</p>
            </div>
            <div className="details">
                {eduIcon}<p><b>Education: </b> {education} </p>
                {badgeIcon}<p><b>Badge: </b>{badges}</p>
                {gloveIcon}<p><b>Country: </b>{country}</p>
                {xpIcon}<p><b>XP: </b>{xp}</p>
            </div>
            <button onClick={handleAddToClan} >Add To Clan</button>

        </div>
    );
};

export default Programmer;