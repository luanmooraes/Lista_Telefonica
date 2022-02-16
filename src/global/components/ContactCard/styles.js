import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    height: 70px;
    border-width: 2px;
    border-radius: 8px;
    border-color: blueviolet;
    flex-direction: row;
`;

export const Wrapper = styled.TouchableOpacity`
    width: 50%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ViewAvatar = styled.View`
    width: 20%;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
`;

export const ButtonIcon = styled.TouchableOpacity`
    width: 30%;
    align-items: center;
    justify-content: center;
    background-color: blueviolet;
`;

export const PersonsName = styled.Text`
    font-size: 16px;
    font-weight: bold;
`;

export const PersonsPhone = styled.Text`
    font-size: 12px;
`;