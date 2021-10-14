import React from 'react'
import { FiUser, FiList } from "react-icons/fi";
// import { BiUser } from "react-icons/bi";

import './styles.css'

const Header = () => {
    return (
        <div className="header-container">
           <div className="icon-container">
               <h1><FiUser/></h1>
           </div>
           <div className="icon-container">
               <h1><FiList/></h1>
           </div>
        </div>
    )
}

export default Header;