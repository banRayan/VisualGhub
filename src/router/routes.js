import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import  Login  from "../pages/Login";
import Profile from "../pages/Profile/profile";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
        </Routes>
    )
}

export default MainRoutes;