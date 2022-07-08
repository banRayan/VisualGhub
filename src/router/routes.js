import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Error from "../pages/Error";
import { Home } from "../pages/Home";

const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/Error" element={<Error />} />
            <Route path="*" element={<Error />} />
        </Routes>
    )
}

export default MainRoutes;