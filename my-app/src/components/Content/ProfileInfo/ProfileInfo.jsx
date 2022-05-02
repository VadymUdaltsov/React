import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='img_bich' className={s.img_bich} />
            </div>
            <div>
                <img src='https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg' alt='user' className='img-user' />
            </div>
        </div>
        
    ) 
    
}

export default ProfileInfo;