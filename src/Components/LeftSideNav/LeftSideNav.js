import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    

    useEffect(()=>{
        fetch(`https://server-side-brown.vercel.app/category`)
        .then(res=> res.json())
        .then(data => setCategories(data))
    }, [])

    


    return (
        <div className='border border-info border-3 rounded-2 mt-3 ms-3 p-5 bg-dark text-white' style={{height: "60%", width: '25rem'}}>
            <h2>Courses Name</h2>
            {
                categories.map(category =>
                    
                 <div className='border border-1 border-light mt-3 rounded px-2'>
                   <Link className='text-decoration-none text-white' to = {`/category/${category.id}`}><h4>{category.name}</h4></Link>
                 </div>   
                
                    )
            }
        </div>
    );
};

export default LeftSideNav;