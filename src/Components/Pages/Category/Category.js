import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Detailpage from './Detailspage/Detailpage';


const Category = () => {
    const courses = useLoaderData()
    
    return (
        <div className='mt-3'>
            
           {
            courses.map(course=> <Detailpage
            key={course.id}
            course = {course}
            ></Detailpage>)
           }

        </div>
    );
};

export default Category;