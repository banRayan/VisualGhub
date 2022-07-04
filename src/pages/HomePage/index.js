import { Header } from "../../components/Header";
import Menu from "../../components/Menu";
import { Container } from "./styles";

export function HomePage() {
    return (
        <Container>
            <Menu />
            <Header />
        </Container>
    )
}