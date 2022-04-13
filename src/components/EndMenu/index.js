import React from 'react';

import { 
    Container,
    Item 
} from './styles';
import { FiMenu} from "react-icons/fi";

const EndMenu = () => {
    return(
        <Container>
            <Item>
                <h3><FiMenu/></h3>
            </Item>
        </Container>
    )
}

export default EndMenu;