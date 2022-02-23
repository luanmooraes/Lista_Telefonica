import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { Avatar, Button, Card, Divider } from 'react-native-paper';
import Loading from '../../global/components/Loading';
import { token } from '../../global/helpers/constants';
import api from '../../services/api';
import { Container, WrapperFlatlist } from './styles';

const ShowContact = (props) => {
    const { ID } = props.route.params
    const [callHistory, setCallHistory] = useState([]);
    const [contact, setContact] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const navigation = useNavigation();
    //console.log(data)
    useEffect(() => {
        loadCalls(ID)
        loadContact(ID)
    }, [])

    const loadContact = async (id) => {
        setLoading(true)
        const response = await api.get(`/api/Contato/${token}/${id}`);
        setContact(response.data)
        setLoading(false)
        //console.log(response.data)
    }

    const loadCalls = async (id) => {
        setLoading(true)
        const response = await api.get(`/api/Telefone/${token}/contato/${id}`);
        setCallHistory(response.data)
        setLoading(false)
    }

    const onPressUpdate = async () => {
        /*const response = await api.put(`/api/Contato/${token}/${id}`, {
            nome: contact.name,
            telefone: contact.phone,
            email: contact.email,
            ativo: contact.isChecked,
            dataNascimento: contact.dataFormatada
        });*/
        //const item = response.data.id
        navigation.navigate('Update', { contact })
    }

    const onPressDelete = async (id) => {
        const response = await api.delete(`/api/Contato/${token}/${id}`);
        navigation.navigate('Home')
    }
    //console.log(callHistory)
    return (
        <Container>
            <Loading isVisible={isLoading} bgColor={'white'} />
            <WrapperFlatlist>
                <FlatList
                    data={callHistory}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <Card.Title
                            title={moment(item.inicioAtendimento).format('DD/MM/YYYY | hh:mm')}
                            subtitle={item.assunto}
                            left={(props) => <Avatar.Icon {...props} icon="call-received" color='green' style={{ backgroundColor: 'white' }} />}

                        />
                    }
                    ItemSeparatorComponent={() => <Divider />}
                    showsHorizontalScrollIndicator={false}
                    refreshing={false}
                    onRefresh={loadCalls}
                />
            </WrapperFlatlist>
            <Button
                icon="account-edit"
                style={{ marginTop: 50, backgroundColor: 'orange' }}
                mode='contained'
                onPress={() => { onPressUpdate(ID) }}
            >
                Editar Contato
            </Button>
            <Button
                icon="trash-can"
                style={{ marginTop: 20, backgroundColor: '#C4302B' }}
                mode='contained'
                onPress={() => { onPressDelete(ID) }}
            >
                Deletar Contato
            </Button>
        </Container>
    )
}

export default ShowContact;