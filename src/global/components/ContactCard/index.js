import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import {
    Container,
    Wrapper,
    PersonsName,
    PersonsPhone,
    ButtonIcon,
    ViewAvatar
} from './styles';
import { Avatar } from 'react-native-paper';

const ContactCard = (props) => {
    const { name, phone, onPress, onPressPhone } = props

    return (
        <Container>
            <ViewAvatar>
                <Avatar.Image size={50} source={require('../../../images/avatar.png')} />
            </ViewAvatar>
            <Wrapper onPress={onPress}>
                <PersonsName>{name}</PersonsName>
                <PersonsPhone>{phone}</PersonsPhone>
            </Wrapper>
            <ButtonIcon onPress={onPressPhone}>
                <MaterialIcons name="phone" size={24} color="white" />
            </ButtonIcon>
        </Container>
    )
}

export default ContactCard;