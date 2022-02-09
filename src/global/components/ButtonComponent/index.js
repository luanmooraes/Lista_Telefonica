import React from 'react';
import { ButtonContainer, Container , TextButton } from './styles';

const ButtonComponent = (props) => {
    const { title, onPress } = props;
    
    return (
        <ButtonContainer onPress={onPress}>
            <Container>
                <TextButton>{title}</TextButton>
            </Container>
        </ButtonContainer>
    )
}

export default ButtonComponent;