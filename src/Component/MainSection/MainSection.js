import React from 'react';
import users from '../../users/users';
import { useState } from 'react';
import Blog from './Blogs/Blog';
import './MainSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

const MainSection = () => {
    const [imagesAndUsers, setUser] = useState(users);
    const [salary, setCount] = useState([]);
    const addHandleSalary = (user) => {
        const newSalary = [...salary, user];
        setCount(newSalary);
    };
    const totalSalary = salary.reduce((total, user) => total + user.salary, 0);
    return (
            <div className = "main-section">
                <div className = "elements-container">
                    <div className = "counter-icon-section">
                        <h3 className = "salary-counter-icon">
                            <span>Total Salary: ${totalSalary}</span>
                            <span><FontAwesomeIcon icon={faUserPlus} />&#13;
                                <sup className = "super-script">{salary.length}</sup>
                            </span>
                        </h3>
                    </div>
                    <div className="element-sub-container">
                        {imagesAndUsers.map(users => <Blog addHandleSalary = {addHandleSalary} user = {users}></Blog>)}
                    </div>
                </div>
            </div>
    );
};

export default MainSection;