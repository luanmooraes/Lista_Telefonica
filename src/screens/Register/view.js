import React, { useState } from 'react';
import { Container ,TextRegister, Wrapper } from './styles'
import SpaceView from '../../global/components/SpaceView';
import ButtonComponent from '../../global/components/ButtonComponent';
import TextInputComponent from '../../global/components/TextInputComponent';
import Checkbox from 'expo-checkbox';
import { Button } from 'react-native'
import DatePicker from 'react-native-date-picker'

const RegisterView = (props) => {
    const { 
        onPressRegister, 
        name, 
        phone, 
        email,
        dataNascimento, 
        onChangeName, 
        onChangePhone,
        onChangeEmail, 
        isChecked, 
        setChecked 
    } = props;
    const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
    
    return (
        <Container>
            <TextRegister>Cadastro</TextRegister>
            <SpaceView vertical={30} />
            <Wrapper>
                <TextInputComponent
                    title='NOME'
                    placeholder="ex: Maria"
                    value={name}
                    onChangeText={(text) => onChangeName(text)}
                />
                <TextInputComponent
                    title='TELEFONE'
                    placeholder="ex: 85 98888-8888"
                    value={phone}
                    onChangeText={(text) => onChangePhone(text)}
                />
                <TextInputComponent
                    title='E-MAIL'
                    placeholder="ex: seuemail@gmail.com"
                    value={email}
                    onChangeText={(text) => onChangeEmail(text)}
                />
                <TextInputComponent
                    title='DATA DE NASCIMENTO'
                    placeholder="ex: 21/10/1997"
                    value={dataNascimento}
                    onChangeText={(text) => onChangePhone(text)}
                />
                <Checkbox
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? 'blueviolet' : 'blueviolet'}
                />
                <SpaceView vertical={3} />
            </Wrapper>
            <ButtonComponent onPress={onPressRegister} title="Cadastrar" />
        </Container>
    )
}

export default RegisterView;