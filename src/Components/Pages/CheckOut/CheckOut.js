import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOut = () => {
    const checkouts = useLoaderData()
    return (
        <div>
            {
                checkouts.map(checkout=> 
                    <div className='w-50 mx-auto  d-lg-flex justify-content-lg-start mt-5 border border-2 border-info rounded'>
                        <div className='border border-2 border-info'>
                            <img src={checkout.picture} className="img-fluid" style={{width: '100%'}} alt="this is img" />
                        </div>
                        <div className='mt-2 ms-lg-5 text-primary'>
                            <h3>{checkout.name}</h3>
                            <h5>Email: {checkout.email}</h5>
                            <h5>Course Status:{checkout.status}</h5>
                        </div>
                    </div>
                    )
            }
        </div>
    );
};

export default CheckOut;