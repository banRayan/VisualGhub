import React from "react";
import { useAuth } from "../../context/Auth";
import { Container, ProfileContainer, CardProfile, UserContainer, Picture, Name, Username, Bio, Follows, FollowsCount, SocialContainer, SocialCard, Link } from "./styles";

import Menu from '../../components/Menu';
import { FiTwitter, FiLink2, FiMapPin } from "react-icons/fi";


const Profile = () => {
    const { data } = useAuth();

    return(
        <Container>
            <Menu />
            <ProfileContainer>
                <CardProfile>
                    <UserContainer>
                        <Picture src={data.avatar_url} alt="Imagem de perfil do usuário"></Picture>
                        <div>
                            <Name>{data.name}</Name>
                            <Username>{data.login}</Username>
                        </div>
                    </UserContainer>
                        <Bio>
                            <p>{data.bio}</p>
                        </Bio>
                        <Follows>
                            <FollowsCount>
                                {data.followers} <p>Followers</p>
                            </FollowsCount>
                            <FollowsCount>
                                {data.following} <p>Following</p>
                            </FollowsCount>
                        </Follows>
                        <SocialContainer>
                            <Link href={`https://twitter.com/${data.twitter_username}`} rel='external' target='_blank'>
                                <SocialCard><h2><FiTwitter/></h2>{data.twitter_username}</SocialCard>
                            </Link>
                            <Link href={data.blog} rel='external' target='_blank'>
                                <SocialCard><h2><FiLink2/></h2> Blog </SocialCard>
                            </Link>
                        </SocialContainer>
                </CardProfile>
            </ProfileContainer>
        </Container>
    )
}

export default Profile;

//Inmplementar regra de dezenas em Follow Count 