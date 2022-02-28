import React from "react";
import { useAuth } from "../../context/Auth";
import { Container } from "./styles";

const Profile = () => {
    const { data } = useAuth();

    return(
        <Container>
            <h1>Profile</h1>
            <p>{data.name}</p>
        </Container>
    )
}

export default Profile;