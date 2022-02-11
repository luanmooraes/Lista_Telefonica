
import React, { useEffect, useState } from 'react';
import { Button, FlatList } from 'react-native';
import api from '../../services/api';
import ContactCard from '../../global/components/ContactCard';
import SpaceView from '../../global/components/SpaceView';
import { Container, Text, WrapperFlatlist, IconView } from './styles';
import { token } from '../../global/helpers/constants';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Loading from '../../global/components/Loading';



const Home = (props) => {
    const { } = props;
    const navigation = useNavigation();
    const [list, setList] = useState([]);
    const token = '7df05376-90db-4235-9883-ce6cf4ec9565';
    const [isLoading, setLoading] = useState(true);
    const [refreshing, setRefreshing]=useState(false);
    useEffect(() => {
        loadUsers()
    }, []);

    const loadUsers = async () => {
        setLoading(true)
        const response = await api.get(`/api/Contato/${token}`);
        setList(response.data) 
        setLoading(false)
        console.log(response.data)
    }

    const onPressHandleRegister = () => {
        navigation.navigate('Register')
    }

    const onPressDelete = async(id) => {
        const response = await api.delete(`/api/Contato/${token}/${id}`)
        console.log('Delete')
        loadUsers()
    }
    
    return (
        <Container>
            <Loading isVisible={isLoading} bgColor={'white'}/>
            <SpaceView vertical={20}/>
            <Text>Lista de Contatos</Text>
            <SpaceView vertical={30}/>
            <WrapperFlatlist>
                <FlatList
                    data={list}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => 
                        <ContactCard name={item.nome} phone={item.telefone} onPress={() => {onPressDelete(item.id)}} />
                    }
                    ItemSeparatorComponent={() => <SpaceView vertical={6}/>}
                    refreshing={refreshing}
                    onRefresh={loadUsers}
                />
            <IconView onPress={onPressHandleRegister}>
                <Ionicons name="add-circle" size={80} color="blueviolet" />
            </IconView>
            
            </WrapperFlatlist>
        </Container>
    )
}

export default Home