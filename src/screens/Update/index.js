import { useNavigation } from '@react-navigation/native';
import { format, parse } from 'date-fns';
import React, { useState } from 'react';
import { Button, TextInput, Title } from 'react-native-paper';
import CheckBoxComponent from '../../global/components/CheckBoxComponent';
import SpaceView from '../../global/components/SpaceView';
import { token } from '../../global/helpers/constants';
import api from '../../services/api';
import { Container, Wrapper } from './styles';
import moment from 'moment';
import { MaskService } from 'react-native-masked-text';

const Update = (props) => {
    const navigation = useNavigation();
    const { contact } = props.route.params;
    console.log(contact)
    const [name, setName] = useState(contact.nome);
    const [phone, setPhone] = useState(contact.telefone);
    const [email, setEmail] = useState(contact.email);
    const [dataNascimento, setDataNascimento] = useState(moment(contact.dataNascimento).format('DD/MM/YYYY'));
    const [isChecked, setChecked] = useState(false || contact.ativo);
    //const dataFormatada = format(parse(dataNascimento, 'yyyy-MM-dd', new Date()), "dd/MM/yyyy").toString();

    const onChangeName = (text) => {
        setName(text)
    }

    const onChangePhone = (text) => {
        let maskedPhone = MaskService.toMask('cel-phone', text, {
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) '
        })
        setPhone(maskedPhone)
    }

    const onChangeEmail = (text) => {
        setEmail(text)
    }

    const onChangeDataNascimento = (text) => {
        setDataNascimento(text)
    }

    const onPressUpdateData = async (id) => {
        const dataFormatada = format(parse(dataNascimento, "dd/MM/yyyy", new Date()), 'yyyy-MM-dd').toString();
        const response = await api.put(`/api/Contato/${token}/${id}`, {
            nome: name,
            telefone: phone,
            email: email,
            ativo: isChecked,
            dataNascimento: dataFormatada
        })
        navigation.navigate('Home')
    }

    return (
        <Container>
            <Wrapper>
                <Title style={{ color: 'green', textAlign: 'center', marginBottom: 20 }} >Edite seu cadastro</Title>
                <TextInput
                    label='NOME'
                    placeholder="ex: Maria"
                    value={name}
                    onChangeText={(text) => onChangeName(text)}
                />
                <SpaceView vertical={3} />
                <TextInput
                    label='NÚMERO'
                    placeholder="ex: (88)999998888"
                    value={phone}
                    onChangeText={(text) => onChangePhone(text)}
                />
                <SpaceView vertical={3} />
                <TextInput
                    label='E-MAIL'
                    placeholder="ex: maria@gmail.com"
                    value={email}
                    onChangeText={(text) => onChangeEmail(text)}
                />
                <SpaceView vertical={3} />
                <TextInput
                    label='DATA DE NASCIMENTO'
                    placeholder="ex: 20/07/1998"
                    value={dataNascimento}
                    onChangeText={(text) => onChangeDataNascimento(text)}
                />
                <SpaceView vertical={3} />
                <CheckBoxComponent
                    title='I agree to Therms and Conditions'
                    value={isChecked}
                    onValueChange={setChecked}
                    color={isChecked ? 'green' : 'green'}
                />
                <SpaceView vertical={3} />
            </Wrapper>
            <Button onPress={() => { onPressUpdateData(contact.id) }} mode='contained' style={{ width: '100%' }}>
                SALVAR
            </Button>
        </Container>
    )
}

export default Update;