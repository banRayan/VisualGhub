import { useEffect, useState } from "react";
import { useAuth } from "../../context/Auth";

import { Header } from "../../components/Header";
import { Profile } from "../../components/Profile";
import Repository from "../../components/Repository";
import Menu from "../../components/Menu";

import {
    Container,
    ContentContainer,
    Card,
    CardContainer,
    RightContainer,
    TitleCard,
    LeftContent,
    Content
} from "./styles";

export function Home() {
    const { repository, username } = useAuth();
    const [clickedItem, setClickedItem] = useState([]);

    useEffect(() => {
        setClickedItem([])
    }, [username])

    const handleClickRepository = (id) => {
        const [repo] = repository.filter(repo => repo.id === id);
        setClickedItem(repo)
    }

    console.log(clickedItem.description);
    return (
        <Container>
            <Menu />
            <RightContainer>
                <Header />
                <ContentContainer>
                    <Content>
                        <LeftContent>
                            <CardContainer>
                                {/* <TitleCard>Repository</TitleCard> */}
                                <Card style={{ fontSize: 24, fontWeight: 700 }}>{clickedItem.name}</Card>
                            </CardContainer>
                            <CardContainer>
                                <TitleCard>Description</TitleCard>
                                <Card>{clickedItem.description}</Card>
                            </CardContainer>
                            <Profile />
                        </LeftContent>
                        <Repository handleClickRepository={handleClickRepository} />
                    </Content>
                </ContentContainer>
            </RightContainer>
        </Container>
    )
}