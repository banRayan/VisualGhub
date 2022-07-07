import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import Menu from "../../components/Menu";
import Repository from "../../components/Repository";
import { useAuth } from "../../context/Auth";

import {
    Container,
    ContentContainer,
    Card,
    CardContainer,
    RightContainer,
    TitleCard
} from "./styles";

export function HomePage() {
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
                    <CardContainer>
                        <TitleCard>Description</TitleCard>
                        <Card>{clickedItem.description}</Card>
                    </CardContainer>
                    <Repository handleClickRepository={handleClickRepository} />
                </ContentContainer>
            </RightContainer>
        </Container>
    )
}