import React from 'react';
import './Member.css'

const Member = (props) => {
    const {name, xp, img} = props.member;
    
    return (
        <div className='member'>

            <img src={img} alt="" />
            <div>
                <p><b>{name}</b></p>
                <p>xp : {xp}</p>
            </div>
        </div>
    );
};

export default Member;