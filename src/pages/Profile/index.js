import React from "react";
import { useAuth } from "../../context/Auth";
import { Container, ProfileContainer, CardProfile, UserContainer, Picture, Name,  Username, Location, Bio, Follows, FollowsCount, SocialContainer, SocialCard, Link, ScoresContainer, Score } from "./styles";

import Menu from '../../components/Menu';
import { FiTwitter, FiLink2, FiMapPin } from "react-icons/fi";
import EndMenu from "../../components/EndMenu";


const Profile = () => {
    const { data } = useAuth();
    
    const NumberConversion = ( number ) => {
        const StringNumber = String(number).split('');
        const NumberLength = StringNumber.length;

        switch (NumberLength) {
            case 1:
                return number;
            case 2:
                return number;
            case 3:
                return number;
            case 4:
                return (StringNumber[0] + 'k');
            case 5:
                return (StringNumber[0] + StringNumber[1] + 'k');
            case 6:
                return (StringNumber[0] + StringNumber[1] + StringNumber[2] +  'k');
            default:
                return (StringNumber[0] + 'm');
        }
    }

    const handleEmpty = ( item ) => {
        if (item==="" | item===null) {
            return false
        }else{
            return true
        }
    }
    console.log(data)

    
    return(
        <Container>
            <Menu />
            <ProfileContainer>
                <CardProfile>
                    <UserContainer>
                        <Picture src={data.avatar_url} alt="Imagem de perfil do usuário"></Picture>
                        <div>
                            <Link href={data.html_url} rel="external" target="_blank">
                                <Name>{data.name}</Name>
                            </Link>
                            <Username>{data.login}</Username>
                        </div>
                    </UserContainer>
                        <Bio>
                            <p>{data.bio}</p>
                        </Bio>
                        <Follows>
                            <FollowsCount>
                                {NumberConversion(data.followers)} <p>Followers</p>
                            </FollowsCount>
                            <FollowsCount>
                                {NumberConversion(data.following)} <p>Following</p>
                            </FollowsCount>
                        </Follows>
                        <SocialContainer>
                            {
                                handleEmpty(data.twitter_username) === true 
                                ? 
                                <Link href={`https://twitter.com/${data.twitter_username}`} rel='external' target='_blank'>
                                    <SocialCard><h2><FiTwitter/></h2>{data.twitter_username}</SocialCard>
                                </Link>
                                : false
                            }
                            
                            {
                                handleEmpty(data.blog) === true 
                                ? 
                                <Link href={data.blog} rel='external' target='_blank'>
                                    <SocialCard><h2><FiLink2/></h2> Blog </SocialCard>
                                </Link> 
                                : false
                            }
                            {
                                handleEmpty(data.location) === true 
                                ? 
                                <Location><h4><FiMapPin/></h4>{data.location}</Location>
                                : false
                            }
                        </SocialContainer>
                </CardProfile>
                <ScoresContainer>
                    <Score width="380em" alt="Github Status " src={`https://github-readme-stats.vercel.app/api?username=${data.login}&show_icons=true&theme=default`} />
                    <Score width="380em" alt="Most used languages" src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${data.login}&layout=compact&theme=default`}/>
                </ScoresContainer>
            </ProfileContainer>
            <EndMenu/>
        </Container>
    )
}

export default Profile;

//Inmplementar regra de dezenas em Follow Count 