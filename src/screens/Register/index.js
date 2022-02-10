import React, { useState } from 'react';
import api from '../../services/api';
import { token } from '../../global/helpers/constants';
import { Container, TextRegister, Wrapper, TextInputComponent, ButtonDate } from './styles'
import SpaceView from '../../global/components/SpaceView';
import ButtonComponent from '../../global/components/ButtonComponent';
import Checkbox from 'expo-checkbox';
import { TextInput } from 'react-native'

const Register = (props) => {
  const { } = props;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [isChecked, setChecked] = useState(false);

  const onChangeName = (text) => {
    setName(text)
  }

  const onChangePhone = (text) => {
    setPhone(text)
  }

  const onChangeEmail = (text) => {
    setEmail(text)
  }

  const onChangeDataNascimento = (text) => {
    setDataNascimento(text)
  }

  const onPressRegister = async () => {
    const response = await api.post(`/api/Contato/${token}`, {
      nome: name,
      telefone: phone,
      email: email,
      ativo: false,
      dataNascimento: dataNascimento
    })
    console.log(response.data)
  }

  return (
    <Container>
      <TextRegister>Cadastro</TextRegister>
      <SpaceView vertical={30} />
      <Wrapper>
        <TextInputComponent>
          <TextInput
            placeholder="ex: Maria"
            value={name}
            onChangeText={(text) => onChangeName(text)}
          />
        </TextInputComponent>
        <TextInputComponent>
          <TextInput
            placeholder="ex: 85 98888-8888"
            value={phone}
            onChangeText={(text) => onChangePhone(text)}
          />
        </TextInputComponent>
        <TextInputComponent>
          <TextInput
            placeholder="ex: seuemail@gmail.com"
            value={email}
            onChangeText={(text) => onChangeEmail(text)}
          />
        </TextInputComponent>
        <TextInputComponent>
          <TextInput
            placeholder="ex: 17/08/2022"
            value={dataNascimento}
            onChangeText={(text) => onChangeDataNascimento(text)}
          />
        </TextInputComponent>
        <SpaceView vertical={3} />
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

export default Register;