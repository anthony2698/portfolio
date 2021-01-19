 import React from 'react';
import Title from './Title';
import { ContactBody, ContactHeading, Description, Link } from '../styles/StyledComponents'

const ContactPage = () => {
    return (
        <ContactBody>
            <Title title='Whats Next?'/>
            <ContactHeading className="title">Get In Touch</ContactHeading>

            <Description>
                I'm currently looking for any new opportunities, my inbox is always open.
                Whether you have a question or just want to say hi, email me!
            </Description>

            <Link className="email-link" href={`mailto:carrilloanthony2698@gmail.com`}>
                Say Hello
            </Link>
        </ContactBody>
    );
}

export default ContactPage;