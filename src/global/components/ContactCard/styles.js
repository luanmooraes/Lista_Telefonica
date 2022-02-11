import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 80px;
    border-width: 2px;
    border-radius: 8px;
    border-color: blueviolet;
    flex-direction: row;
`;

export const Wrapper = styled.TouchableOpacity`
    width: 70%;
    align-items: center;
    justify-content: center;
`;

export const IconView = styled.TouchableOpacity`
    width: 30%;
    align-items: center;
    justify-content: center;
    background-color: blueviolet;
`;

export const PersonsName = styled.Text``;

export const PersonsPhone = styled.Text``;