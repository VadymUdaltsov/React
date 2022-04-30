import React from 'react';
import './Content.module.css';

const Content = () => {
    return (
        <div className='Content_content__GgJDS'>
            <div>
                <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg' alt='img_bich' className='Content_img-bich__ubn4y' />
            </div>
            <div>
                <img src='https://d5nunyagcicgy.cloudfront.net/external_assets/hero_examples/hair_beach_v391182663/original.jpeg' alt='user' className='img-user' />
            </div>
            <div>
                My posts
                <div>
                    New post
                </div>
                <div>
                    <div>
                        Post 1
                    </div>
                    <div>
                        Post 2
                    </div>
                </div>
            </div>
        </div>
    ) 
    
}

export default Content;