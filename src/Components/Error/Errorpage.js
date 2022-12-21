import React from 'react';
import error from '../../image/download.png'

const Errorpage = () => {
    return (
        <div>
            <div className='w-75 mx-auto text-center mt-5'>
                    <img src={error} style={{width: "50%", height: "50%"}} alt="" />
                    <h1>page not found</h1>
            </div>
        </div>
    );
};

export default Errorpage;