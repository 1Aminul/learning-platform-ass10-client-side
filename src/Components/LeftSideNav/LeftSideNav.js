import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch(`https://server-side-brown.vercel.app/category`)
        .then(res=> res.json())
        .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2>Courses Name</h2>
            {
                categories.map(category =>
                    
                 <div>
                    <h3>{category.name}</h3>
                 </div>   
                
                    )
            }
        </div>
    );
};

export default LeftSideNav;