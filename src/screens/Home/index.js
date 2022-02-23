
import React, { useEffect, useState } from 'react';
import { Button, FlatList, View, TouchableOpacity, Linking } from 'react-native';
import api from '../../services/api';
import ContactCard from '../../global/components/ContactCard';
import SpaceView from '../../global/components/SpaceView';
import { Container, Text, WrapperFlatlist, IconView } from './styles';
import { token } from '../../global/helpers/constants';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../global/components/Loading';
import { List, Card, Avatar, IconButton, Divider } from 'react-native-paper';


const Home = (props) => {
    const { } = props;

    const [list, setList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const navigation = useNavigation();

    useEffect(() => {
        loadUsers()
    }, []);

    const loadUsers = async () => {
        setLoading(true)
        const response = await api.get(`/api/Contato/${token}`);
        setList(response.data);
        setLoading(false)
    }

    const onPressRegister = () => {
        navigation.navigate('Register')
    }

    const onPressCallProgress = async (idChave) => {
        const response = await api.post(`/api/Telefone/${token}`, {
            idContato: idChave
        })
        let newList = response.data;
        console.log(newList)
        
        Linking.openURL(`tel:999999999`)
       navigation.navigate('CallProgress', { newList })
    }

    const onPressShowCalls = (idContact) => {
        const ID = idContact;
        navigation.navigate('ShowContact', { ID })
    }

    return (
        <Container>
            <Loading isVisible={isLoading} bgColor={'white'} />
            <SpaceView vertical={20} />
            <Text>Lista de Contatos</Text>
            <SpaceView vertical={30} />
            <WrapperFlatlist>
                <FlatList
                    data={list}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) =>
                        <TouchableOpacity onPress={() => { onPressShowCalls(item.id) }}>
                            <Card.Title
                                title={item.nome}
                                subtitle={item.telefone}
                                left={(props) => <Avatar.Icon {...props} icon="account" color='white' style={{backgroundColor: 'gray'}}/>}
                                right={(props) => <IconButton {...props} icon="phone" color='green' onPress={() => { (onPressCallProgress(item.id)) }} />}
                            />
                        </TouchableOpacity>
                    }
                    ItemSeparatorComponent={() => <Divider />}
                    refreshing={refreshing}
                    onRefresh={loadUsers}
                />
                <IconView onPress={onPressRegister}>
                    <Ionicons name="add-circle" size={80} color="green" />
                </IconView>
            </WrapperFlatlist>
        </Container>
    )
}

export default Home