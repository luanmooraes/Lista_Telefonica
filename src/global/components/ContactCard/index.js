import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import { 
    Container, 
    Wrapper, 
    PersonsName, 
    PersonsPhone, 
    IconView 
} from './styles';

const ContactCard = (props) => {
    const {name, phone, onPress} = props
    
    return (
        <Container>
            <Wrapper onPress={onPress}>
                <PersonsName>{name}</PersonsName>
                <PersonsPhone>{phone}</PersonsPhone>
            </Wrapper>
            <IconView>
                <MaterialIcons name="phone" size={24} color="white" />
            </IconView>
            <IconView>
                <MaterialCommunityIcons name="trash-can-outline" size={24} color="white" />
            </IconView>
            <IconView>
                <MaterialIcons name="mode-edit" size={24} color="white" />
            </IconView>
        </Container>
    )
}

export default ContactCard;