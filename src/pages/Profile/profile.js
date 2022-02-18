import React from "react";
import { useAuth } from "../../context/Auth";
import './styles.css';

const Profile = () => {
    const { data } = useAuth();

    return(
        <main className="profile-container">
            <h1>Profile</h1>
            <p>{data.name}</p>
        </main>
    )
}

export default Profile;