
import React, { useEffect, useState } from 'react';
import { Button, FlatList } from 'react-native';
import api from '../../services/api';
import ContactCard from '../../global/components/ContactCard';
import SpaceView from '../../global/components/SpaceView';
import { Container, Text, WrapperFlatlist, IconView } from './styles';
import { token } from '../../global/helpers/constants';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Home = (props) => {
    const { } = props
    const navigation = useNavigation()
    const [list, setList] = useState([])
    const token = '7df05376-90db-4235-9883-ce6cf4ec9565'
    useEffect(() => {
        const loadUsers = async () => {
            const response = await api.get(`/api/Contato/${token}`);
            setList(response.data)
        }
        loadUsers();
    }, [])

    const onPressHandleRegister = () => {
        navigation.navigate('Register')
    }
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
            <IconView onPress={onPressHandleRegister}>
                <Ionicons name="add-circle" size={80} color="blueviolet" />
            </IconView>

            </WrapperFlatlist>
        </Container>
    )
}

export default Home