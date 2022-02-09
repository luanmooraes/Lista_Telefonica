import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { 
    Container, 
    Wrapper, 
    PersonsName, 
    PersonsPhone, 
    IconView 
} from './styles';

const ContactCard = (props) => {
    const {name, phone} = props
    
    return (
        <Container>
            <Wrapper>
                <PersonsName>{name}</PersonsName>
                <PersonsPhone>{phone}</PersonsPhone>
            </Wrapper>
            <IconView>
                <MaterialIcons name="phone" size={24} color="white" />
            </IconView>
        </Container>
    )
}

export default ContactCard;