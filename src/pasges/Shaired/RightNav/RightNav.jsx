import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import bg from '../../../assets/bg.png'
import Qzone from '../Qzone/Qzone';

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>

            <Button className='mb-2' variant="outline-primary"> <FaGoogle></FaGoogle> Login with google</Button>
            <Button variant="outline-secondary"> <FaGithub></FaGithub> Login with Github</Button>

            <div>
                <h4>Find us on</h4>

                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook> facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter> twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram></FaInstagram> instagram</ListGroup.Item>

                </ListGroup>
            </div>
            <Qzone></Qzone>

            <div>
               <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;