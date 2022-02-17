import React from 'react'
import { Link } from 'react-router-dom';
import { FiList } from "react-icons/fi";
import { FiUser } from "react-icons/fi"
import { FiArchive } from "react-icons/fi"

import './styles.css'

const Menu = () => {
    return (
        <div className='menu-container'>
            <div className="header-container">
                <FiList/>
            </div>
            <Link to={'/profile'}>
                <div className='header-container'>
                    <FiUser />
                </div>
            </Link>
            <div className='header-container'>
                <FiArchive />
            </div>
        </div>
    )
}

export default Menu;