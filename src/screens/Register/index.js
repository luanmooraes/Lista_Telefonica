import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import { token } from '../../global/helpers/constants';
import { Container, Wrapper, DateView, TextInputView } from './styles'
import SpaceView from '../../global/components/SpaceView';
import { useNavigation } from '@react-navigation/native';
import { format, parse } from 'date-fns';
import { Button, Title, TextInput, IconButton } from 'react-native-paper';
import CheckBoxComponent from '../../global/components/CheckBoxComponent';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';
import { MaskService } from 'react-native-masked-text';
import { Text } from 'react-native';
import { isEmpty, isValidEmail } from '../../global/helpers/functions';
import TextInputComponent from '../../global/components/TextInputComponent';
import { useForm } from 'react-hook-form';
import { Formik } from 'formik';

const Register = (props) => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [errorName, setErrorName] = useState('')
  const [phone, setPhone] = useState('');
  const [errorPhone, setErrorPhone] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('')
  const [dataNascimento, setDataNascimento] = useState('');
  const [errorDataNascimento, setErrorDataNascimento] = useState('');
  const [isChecked, setChecked] = useState(false);

  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('Selecione uma data');


  const onChangeName = (text) => {
    setName(text)
    setErrorName('')
  }

  const onChangePhone = (text) => {
    let maskedPhone = MaskService.toMask('cel-phone', text, {
      maskType: 'BRL',
      withDDD: true,
      dddMask: '(99) '
    })
    setPhone(maskedPhone)
    setErrorPhone('')
  }

  const onChangeEmail = (text) => {
    setEmail(text)
    setErrorEmail('')
  }

  const onChangeDataNascimento = (text) => {
    setErrorDataNascimento('')
    let maskedBirth = MaskService.toMask('datetime', text, {
      format: 'DD/MM/YYYY'
    })
    setDataNascimento(maskedBirth)
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    setTitle(moment(date).format('DD/MM/YYYY'))
  };

  const onPressRegister = async () => {
    const dataFormatada = format(parse(dataNascimento, "dd/MM/yyyy", new Date()), 'yyyy-MM-dd').toString();
    const response = await api.post(`/api/Contato/${token}`, {
      nome: name,
      telefone: phone,
      email: email,
      ativo: isChecked,
      dataNascimento: dataFormatada
    })
    navigation.navigate('Home')
  }

  const deucerto = () => {
    console.log(name, phone, email)
  }

  const onBlur = (text, field) => {
    switch (field) {
      case 'name':
        setErrorName(text.length < 3 ? 'INFORME SEU NOME COMPLETO' : '')
        break

      case 'phone':
        setErrorPhone(phone.length === 15 ? '' : 'NÚMERO DE TELEFONE INVÁLIDO')
        break

      case 'dataNascimento':
        setErrorDataNascimento('')
        if (isEmpty(text)) {
          setErrorDataNascimento('INFORME SUA DATA DE NASCIMENTO')
          break
        } else {
          const newBirth = moment(text, 'DD/MM/YYYY', true)
          if (!newBirth.isValid()) {
            setErrorDataNascimento('DATA DE NASCIMENTO INVÁLIDA')
          }
          else if (newBirth.isAfter()) {
            setErrorDataNascimento('DATA DE NASCIMENTO MAIOR QUE ATUAL')
          }
        }
        break

      case 'email':
        if (isEmpty(text)) {
          setErrorEmail('INFORME SEU EMAIL')
        }
        else if (!isValidEmail(text)) {
          setErrorEmail('EMAIL INVÁLIDO')
        } else {
          setErrorEmail('')
        }
        break

      default:
        break
    }
  }

  return (
    <Container>
      <Title style={{ color: 'green', marginBottom: 5 }}>Registre-se</Title>
      <SpaceView vertical={10} />
      <Wrapper>
        <TextInputView>
          <TextInput
            label='NOME'
            placeholder="ex: Maria"
            value={name}
            onChangeText={(text) => onChangeName(text)}
            onBlur={() => onBlur(name, 'name')}
          />
          {<Text style={{ color: 'red', fontSize: 10 }}>{errorName}</Text>}
        </TextInputView>
        <SpaceView vertical={3} />
        <TextInputView>
          <TextInput
            label='NÚMERO'
            placeholder="ex: (88) 99999-8888"
            keyboardType='numeric'
            value={phone}
            onChangeText={(text) => onChangePhone(text)}
            onBlur={() => onBlur(phone, 'phone')}
          />
          {<Text style={{ color: 'red', fontSize: 10 }}>{errorPhone}</Text>}
        </TextInputView>
        <SpaceView vertical={3} />
        <TextInputView>
          <TextInput
            label='E-MAIL'
            placeholder="ex: maria@gmail.com"
            value={email}
            onChangeText={(text) => onChangeEmail(text)}
            onBlur={() => onBlur(email, 'email')}
          />
          {<Text style={{ color: 'red', fontSize: 10 }}>{errorEmail}</Text>}
        </TextInputView>
        <TextInputView>
          <TextInput
            label='DATA DE NASCIMENTO'
            placeholder="ex: 20/01/2004"
            value={dataNascimento}
            onChangeText={(text) => onChangeDataNascimento(text)}
            onBlur={()=>onBlur(dataNascimento, 'dataNascimento')}
          />
          {<Text style={{ color: 'red', fontSize: 10 }}>{errorDataNascimento}</Text>}
        </TextInputView>
        <CheckBoxComponent
          title='I agree to Therms and Conditions'
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? 'green' : 'green'}
        />
        <SpaceView vertical={3} />
        <Button onPress={() => { onPressRegister() }} mode='contained' style={{ width: '100%' }}>
          CADASTRAR
        </Button>
      </Wrapper>
    </Container>
  )
}

export default Register;


/**
 * <DateView>
          <Button
            contentStyle={{ color: 'gray', width: '100%', height: 60, borderBottomWidth: 2, borderColor: 'green' }}
            mode='outlined'
            onPress={() => { showDatepicker() }}
          >
            {title}
          </Button>
          {show && (
            <DateTimePicker
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </DateView>
 */