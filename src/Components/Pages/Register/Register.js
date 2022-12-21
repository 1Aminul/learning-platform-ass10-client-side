import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextAuth';



const Register = () => {
const {signUp, profileUpdate} = useContext(AuthContext)
const [accepted, setAccepted] = useState(false)
    const handlersignUp = e =>{
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        

        const formData = new FormData();
        formData.append("image", form.photourl.files[0])
        const imghostkey = process.env.REACT_APP_image_apiKey

        fetch(`https://api.imgbb.com/1/upload?key=${imghostkey}`, {
            method: "POST",
            body: formData,
        }).then(res => res.json())
            .then(datas => {
                signUp(email, password)
                .then(res=>{
                    const user = res.user
                    console.log(user);
                    profileUpdate(name, datas.data.display_url)
                    .then(()=>{
                        toast.success('Your profile is updated')
                    })
                    .catch(e => console.error(e))
                    form.reset()
                })
                .catch(error => console.error(error))
            })

        console.log(name,email, password);
        
    }

    const handlercheckBox = (e)=>{
        console.log(e.target.checked);
        setAccepted(e.target.checked)
    }


    return (
        <div className='w-50 mx-auto border border-2 p-5 rounded mt-1 bg-dark text-light'>
            <h1 className='text-center mb-4 '>Sign UP</h1>
            <Form onSubmit={handlersignUp} className='w-75 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control name='name'  type="text" placeholder="Enter name" required />   
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control  name='photourl' type="file" placeholder="Photo URL" required/>   
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control  name='email' type="email" placeholder="Enter email" required/>   
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control  name='password' type="password" placeholder="Password" required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handlercheckBox} type="checkbox" label={<Link to='/terms' className='text-white'>Accept Terms & Condition</Link>}/>
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    SignUp
                </Button>
            </Form>

           
        </div>
    );
};

export default Register;