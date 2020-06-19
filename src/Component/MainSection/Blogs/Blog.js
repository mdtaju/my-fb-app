import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Blog = (props) => {
    const {thumbnailUrl, name, salary, email, phone, address} = props.user;
    return (
        <div className="main-blog">
            <div className="img-blog">
                <img src={thumbnailUrl} alt="" />
            </div>
            <div className="name-blog">
                <h3 className = "user-name">{name}</h3>
                <br/>
                <h4>Salary: ${salary}</h4>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>City: {address.city}</p>
                <p className = "zip-code">Zipcode: {address.zipcode}</p>
                <button onClick = {() => props.addHandleSalary(props.user)}><FontAwesomeIcon icon={faUserPlus} /></button>
            </div>
        </div>
    );
};

export default Blog;