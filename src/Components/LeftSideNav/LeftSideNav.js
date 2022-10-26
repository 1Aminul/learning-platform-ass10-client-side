import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        fetch(`https://server-side-brown.vercel.app/category`)
        .then(res=> res.json())
        .then(data => setCategories(data))
    }, [])

    const handlerCourse = (id)=>{
        navigate(`/courses/${id}`)
    }


    return (
        <div className='border border-info '>
            <h2>Courses Name</h2>
            {
                categories.map(category =>
                    
                 <div onClick={()=>handlerCourse(category.id)}>
                   <h3>{category.name}</h3>
                 </div>   
                
                    )
            }
        </div>
    );
};

export default LeftSideNav;