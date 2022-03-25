import React from "react";
import { useAuth } from "../../context/Auth";
import { Container, ProfileContainer, UserContainer, Picture, Name, Bio } from "./styles";

import Menu from '../../components/Menu'


const Profile = () => {
    const { data } = useAuth();

    return(
        <Container>
            <Menu />
            <ProfileContainer>
                <UserContainer>
                    <Picture src={data.avatar_url} alt="Imagem de perfil do usuário"></Picture>
                    <Name>{data.name}</Name>
                    <Bio>{data.bio}</Bio>
                </UserContainer>
            </ProfileContainer>
        </Container>
    )
}

export default Profile;