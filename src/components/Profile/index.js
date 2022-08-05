import React from "react";
import { useAuth } from "../../context/Auth";
import { Avatar, Bio, Container, Name, UserContainer, User, FollowupContainer, Followup, FollowupNumber, FollowupLabel, Footer, Link, MidiaName, Username } from "./styles";
import { TitleCard } from "../../pages/Home/styles";

export function Profile() {
    const { data } = useAuth();

    return (
        <Container>
            <TitleCard>Developer</TitleCard>
            <UserContainer>
                <Avatar src={data.avatar_url} />
                <User>
                    <Name>{data.name}</Name>
                    <Username>{data.login}</Username>
                </User>
            </UserContainer>
            <FollowupContainer>
                <Followup>
                    <FollowupNumber>{data.followers}</FollowupNumber>
                    <FollowupLabel>Followers</FollowupLabel>
                </Followup>
                <Followup>
                    <FollowupNumber>{data.following}</FollowupNumber>
                    <FollowupLabel>Following</FollowupLabel>
                </Followup>
            </FollowupContainer>


            <Bio>{data.bio}</Bio>
            <Footer>
                <Link href={`https://twitter.com/${data.twitter_username}`} target="_blank">
                    <MidiaName>Twitter</MidiaName>
                </Link>
                <Link href={data.html_url} target="_blank">
                    <MidiaName>Github</MidiaName>
                </Link>
                <Link href={data.blog} target="_blank">
                    <MidiaName>Blog</MidiaName>
                </Link>
            </Footer>

        </Container>
    )
}