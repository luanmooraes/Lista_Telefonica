import React, { useState } from 'react';
import api from '../../services/api';
import RegisterView from './view';
import { token } from '../../global/helpers/constants';

const Register = (props) => {
  const { } = props;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('')
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
  
  const onPressRegister = async () => {
    /*const response = await api.post(`/api/Contato/${token}`, {
      nome: name,
      telefone: phone,
      email: email,
      ativo: false,
      dataNascimento: '2022-01-02'
    })*/
    console.log(name, phone,email, dataNascimento,isChecked)


  }
  
  const viewProps = {
    onChangeName, name,
    onChangePhone, phone,
    onPressRegister,
    isChecked, setChecked,
    email, dataNascimento,
    onChangeEmail
  }

  return (
    <RegisterView {...viewProps} />
  )
}

export default Register;