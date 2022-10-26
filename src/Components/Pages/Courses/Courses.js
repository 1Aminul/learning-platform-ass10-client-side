import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
const courses = useLoaderData()
console.log(courses);
    return (
        <div>
            {
                courses.map(course => 
                <div>
                    <h2>{course.name}</h2>
                    <img src={course.image} alt="" />
                </div>)
            }
        </div>
    );
};

export default Courses;