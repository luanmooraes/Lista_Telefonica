import React from 'react';
import {Container,ContainerTextInput, TitleText} from './styles'

const TextInputComponent = (props) => {
    const { placeholder, value, title, onChangeText } = props;
    
    return (
        <Container>
            <TitleText>{title}</TitleText>
            <ContainerTextInput
                placeholder={placeholder}
                value={value}
                onChangeText={() => onChangeText()}
            />
        </Container>
    )
}

export default TextInputComponent;

