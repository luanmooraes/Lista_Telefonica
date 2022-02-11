
import React, { useEffect, useState } from 'react';
import { Button, FlatList } from 'react-native';
import api from '../../services/api';
import ContactCard from '../../global/components/ContactCard';
import SpaceView from '../../global/components/SpaceView';
import { Container, Text, WrapperFlatlist } from './styles';
import { token } from '../../global/helpers/constants';

const Home = (props) => {
    const { } = props
    const [list, setList] = useState([])
    const token = '7df05376-90db-4235-9883-ce6cf4ec9565'
    useEffect(() => {
        const loadUsers = async () => {
            const response = await api.get(`/api/Contato/${token}`);
            setList(response.data)
        }
        loadUsers();
    }, [])

    return (
        <Container>
            <SpaceView vertical={20}/>
            <Text>Lista de Contatos</Text>
            <SpaceView vertical={30}/>
            <WrapperFlatlist>
                <FlatList
                    data={list}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => 
                        <ContactCard name={item.nome} phone={item.telefone}/>
                    }
                    ItemSeparatorComponent={() => <SpaceView vertical={6}/>}
                />
            </WrapperFlatlist>
        </Container>
    )
}

export default Home