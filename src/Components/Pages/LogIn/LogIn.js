import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/ContextAuth';
import {FaGoogle, FaGithub} from 'react-icons/fa'
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const LogIn = () => {
    const {LogIn, SocialSingIn} = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false)
    let googleProvider = new GoogleAuthProvider();
    let githubProvider = new GithubAuthProvider()
    const handlerlogIn = e =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        LogIn(email, password)
        .then(res=>{
            const user = res.user
            console.log(user);
            form.reset()
        }).catch(e => console.error(e))   
    }

        const handlercheckBox = (e)=>{
            console.log(e.target.checked);
            setAccepted(e.target.checked)
        }

        const handlerGoogle = ()=>{
            SocialSingIn(googleProvider)
            .then((res)=>{
                const user = res.user
                console.log(user);
            })
            .catch(e => console.error(e))
        }

        const handlerGithub = ()=>{
            SocialSingIn(githubProvider)
            .then(res=>{
                const user = res.user
                console.log(user);
            }).catch(e => console.error(e))
        }

    return (
        <div className='w-50 mx-auto border border-2 p-lg-5 p-sm-3 rounded mt-5 bg-dark text-white'>
            <h1 className='text-center mb-4 '>Log In</h1>
            <Form onSubmit={handlerlogIn} className='w-75 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handlercheckBox} type="checkbox" label={<Link to='/terms' className='text-white'>Accept Terms & Condition</Link>}/>
                </Form.Group>
                <Button variant="primary" type="submit" disabled = {!accepted}>
                    Log In
                </Button>
                <br />
            </Form>
                <div className='mt-2 w-75 mx-auto'>
                    <Button onClick={handlerGoogle} variant='success' className='' ><FaGoogle className='text-danger'></FaGoogle> Google Sign In</Button>
                    <Button onClick={handlerGithub} variant='secondary' className='ms-lg-3'><FaGithub className='text-dark fs-4'></FaGithub > Github Sign In</Button>
                </div>

        </div>
    );
};

export default LogIn;