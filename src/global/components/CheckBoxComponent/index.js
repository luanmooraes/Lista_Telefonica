import Checkbox from 'expo-checkbox';
import React from 'react';
import { Container, Title } from './styles';

const CheckBoxComponent = (props) => {
    const { value, onValueChange,color,title} = props;
    return (
        <Container>
            <Checkbox 
                style={{marginRight: 8}}
                value={value}
                onValueChange={onValueChange}
                color={color}
            />
            <Title>{title}</Title>
        </Container>
    )
}

export default CheckBoxComponent;
