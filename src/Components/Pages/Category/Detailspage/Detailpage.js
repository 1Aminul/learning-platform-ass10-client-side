import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CategoryCard from '../../CategoryCard/CategoryCard';

const Detailpage = ({course}) => {
    const {id, picture, name, details, category} = course
    console.log(course);
    return (
        <div>
            <div className='text-center mx-3 border border-3 p-1 p-lg-3 bg-dark text-light mt-2 mb-2'>
            <h1>{name}</h1>
            <div style= {{height: '18rem', width: '40%'}} className= " mx-auto  border rounded mt-2 mb-2">
                <img src={picture} style= {{height:"100%", width: '100%'}}  alt="course pic" />
            </div>
            <p className='h5 text-justify'>{details}</p>
            <div className='d-block d-lg-flex justify-content-sm-center gap-5 mt-2'>
                {
                    category.map(option=><CategoryCard
                    key={option.id}
                    option= {option}
                    ></CategoryCard>)
                }
            </div>
            
        </div>
          
                <Link className='text-decoration-none d-lg-block w-25 mx-auto' to={`/checkout/${id}`}><Button variant='warning' className=' mt-3 ms-3 mb-5 d-lg-block fs-5'>Get premium access</Button></Link>
                
        </div>

    );
};

export default Detailpage;