import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";



const RightSideContent =({course}) => {
    
    const {picture, name, details, id, price} = course;
    return (
        <div>
            <Card style={{ width: '20rem' }} className="rounded shadow-lg">
                <Card.Img variant="img-fluid" src={picture} style={{ width: '100%',height: "190px" }}  />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text className='text-justify'>
                    {(details) ? details.slice(0, 200) : details}
                    </Card.Text>
                    <div className='d-flex justify-content-between'>
                    <Link to ={`/category/${id}`}><Button variant="primary" >Details <FaArrowRight/></Button></Link>
                    <h5 className='text-warning'>${price}</h5>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default RightSideContent;