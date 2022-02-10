import styled from "styled-components";

export const Container = styled.View`
    flex: 1;
    margin: 24px 12px 0px 12px;
    align-items: center;
    justify-content: center;
`;

export const Wrapper = styled.View`
    width: 100%;
    margin-bottom: 20px;
`;

export const Name = styled.TextInput`
    border-width: 2px;
    border-style: solid;
    border-color: blueviolet; 
    width: 100%;
    height: 50px;
    padding: 10px;
`;

export const Phone = styled.TextInput`
    border-width: 2px;
    border-style: solid;
    border-color: blueviolet; 
    width: 100%;
    height: 50px;
    padding: 10px;
`;

export const TextRegister = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: blueviolet;
`;

export const TextInputComponent = styled.View`
    width: 100%;
    height: 40px;
    border-width: 2px;
    border-color: blueviolet;
    padding: 10px;
    justify-content: center;
    margin: 3px 0px 3px 0px;
`;

export const ButtonDate = styled.TouchableOpacity`
    width: 100%;
    height: 40px;
    border-width: 2px;
    border-color: blueviolet;
    
    justify-content: center;
    margin: 3px 0px 3px 0px;
`;