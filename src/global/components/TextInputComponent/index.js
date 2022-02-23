import React from 'react';
import { TextInput } from 'react-native-paper';
import { Container, ContainerTextInput, TitleText } from './styles'

const TextInputComponent = (props) => {
    const { placeholder, value, title, onChangeText } = props;

    return (
        <Container>
            <TextInput
                label='NOME'
                placeholder="ex: Maria"
                value={value}
                onChangeText={(text) => onChangeText(text)}
                
            />
            <ErrorText></ErrorText>
        </Container>
    )
}

export default TextInputComponent;

