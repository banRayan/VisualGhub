import React from "react";
import { useAuth } from "../../context/Auth";

import { 
    Container, 
    Main, 
    Card,
    UserContainer,
    User,
    Log,
    Avatar,
    Name,
    Login,
    Bio,
    FollowUp,
    NumberFollowUp,
    NameFollowUp,
    FollowUpContainer,
    SocialContainer,
    Social,
    MidiaName,
    MidiaIcon,
    Location,
} from "./styles";

import Menu from '../../components/Menu';
import Settings from "../../components/Settings";
import { SettingsContainer } from "../Home/styles";

import { FiTwitter, FiLink2, FiMapPin } from "react-icons/fi";

const Profile = () => {
    const { data } = useAuth();
    
    // const NumberConversion = ( number ) => {
    //     const StringNumber = String(number).split('');
    //     const NumberLength = StringNumber.length;

    //     switch (NumberLength) {
    //         case 1:
    //             return number;
    //         case 2:
    //             return number;
    //         case 3:
    //             return number;
    //         case 4:
    //             return (StringNumber[0] + 'k');
    //         case 5:
    //             return (StringNumber[0] + StringNumber[1] + 'k');
    //         case 6:
    //             return (StringNumber[0] + StringNumber[1] + StringNumber[2] +  'k');
    //         default:
    //             return (StringNumber[0] + 'm');
    //     }
    // }
    
    console.log(data);
    return(
        <Container>
            <Menu/>
            <Main>
                <Card>
                    <UserContainer>
                        <User>
                            <Avatar src={data.avatar_url}/>
                            <Log>
                                <Name>{data.name}</Name>
                                <Login>{data.login}</Login>
                            </Log>
                        </User>
                        <Bio>{data.bio}</Bio>
                    </UserContainer>
                    <FollowUpContainer>
                        <FollowUp>
                            <NumberFollowUp>{data.followers}</NumberFollowUp>
                            <NameFollowUp>Followers</NameFollowUp>
                        </FollowUp>
                        <FollowUp>
                            <NumberFollowUp>{data.following}</NumberFollowUp>
                            <NameFollowUp>Following</NameFollowUp>
                        </FollowUp>
                    </FollowUpContainer>
                    <img width="380em" alt="Github Status " src={`https://github-readme-stats.vercel.app/api?username=${data.login}&show_icons=true&theme=dafault`} />
                    <SocialContainer>
                        <Social href={data.blog} rel='external' target='_blank'>
                            <MidiaName>Blog</MidiaName>
                            <MidiaIcon><FiLink2/></MidiaIcon>
                        </Social>
                        <Social href={`https://twitter.com/${data.twitter_username}`} rel='external' target='_blank'>
                            <MidiaName>{data.twitter_username}</MidiaName>
                            <MidiaIcon><FiTwitter/></MidiaIcon>
                        </Social>
                        <Location>
                            <MidiaName>{data.location}</MidiaName>
                            <MidiaIcon><FiMapPin/></MidiaIcon>
                        </Location>
                    </SocialContainer>
                </Card>
            </Main>
            <SettingsContainer>
                <Settings/>
            </SettingsContainer>
        </Container>
    )
}

export default Profile;
