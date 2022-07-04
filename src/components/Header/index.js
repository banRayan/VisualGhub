import React, { useState } from "react";

import { Avatar, Container, ButtonSearch, Search, SearchContainer } from "./styles";
import { useAuth } from "../../context/Auth";
import { FiSearch } from "react-icons/fi";

export function Header() {
    const [inputUsername, setInputUsername] = useState('');
    const { data, setUsername } = useAuth();

    const handleInputChange = (e) => {
        setInputUsername(e.target.value)
    }

    console.log(inputUsername)
    const handleButtonClick = () => {
        setUsername(inputUsername);

    }

    return (
        <Container>
            <SearchContainer>
                <Search
                    type="text"
                    placeholder="Search username"
                    onChange={handleInputChange}
                />
                <ButtonSearch onClick={handleButtonClick}><FiSearch size={20} /></ButtonSearch>
            </SearchContainer>
            <Avatar src={data.avatar_url} />
        </Container>
    )
}

