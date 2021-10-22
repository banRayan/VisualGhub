import React from 'react'
import { FiUser } from "react-icons/fi";
// import { BiUser } from "react-icons/bi";

import './styles.css'

const Header = () => {
    return (
        <div className="header-container">
           <div className="icon-container">
               <FiUser/>
           </div>
           
        </div>
    )
}

export default Header;