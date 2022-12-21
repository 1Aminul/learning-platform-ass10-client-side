import React from 'react';

import Card from 'react-bootstrap/Card';

const CategoryCard = ({option}) => {
    const {name, picture} = option;
    return (
        <div className='text-dark mt-4 '>
            <Card style={{ width: '20rem' }} className=" ">
                <Card.Img variant="img-fluid" src={picture} style={{ width: '100%',height: "190px" }}  />
                <Card.Body>
                    <Card.Title className='border  bg-dark text-white p-2 rounded'>{name}</Card.Title>
                    <Card.Text className='text-justify'>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CategoryCard;