import React from 'react';
import GetInTouch from './GetInTouch';
import Bg_Img from '../../Images/contact-bg.jpg';
import Title from '../Reuseable Components/Title/Title';
import Form from './Form';
const Contact = () => {
    return ( 
        <div>
            <div className="h-screen">
                <Title title='Contact Us' sub='Have Questions?' bg={Bg_Img} />
            </div>
            <div className="flex flex-wrap md:flex-no-wrap space-between bg-gray-100">
                <div className="flex flex-col ml-8">
                    <GetInTouch />
                </div>
                <div className="flex flex-col ml-16">
                    <Form />
                </div>
            </div>
        </div>
    );
}
 
export default Contact;