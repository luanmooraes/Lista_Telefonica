import React, { useEffect, useState } from 'react';
import { Button, Modal, TextInput, Avatar, Subheading } from 'react-native-paper';
import { Container } from './styles';
import { FontAwesome } from '@expo/vector-icons';
import SpaceView from '../../global/components/SpaceView';
import api from '../../services/api';
import { token } from '../../global/helpers/constants';
import { useNavigation } from '@react-navigation/native';

const CallProgress = (props) => {
    const navigation = useNavigation();
    const { newList } = props.route.params
    const [visible, setVisible] = useState(false);
    const [writtenText, setWrittenText] = useState('');
    
    const onChangeText = (text) => {
        setWrittenText(text)
    }

    useEffect(() => {
        const loadContact = async(ID) => {
            const response = await api.get(`/api/Telefone/${token}/${ID}`)
        }
        loadContact(newList.id)
    }, [])

    const onPressEndCall = async (id) => {
        const response = await api.put(`/api/Telefone/${token}/${id}`, {
            assunto: writtenText
        })
        
        navigation.navigate('Home')
        
    }

    const showModal = () => {
        setVisible(true);
    }

    const hideModal = () => {
        setVisible(false);
    }
    
    const containerStyle = { 
        backgroundColor: 'white', 
        padding: 20, 
        width: '100%', 
        height: 300 
    };

    return (
        <Container>
            <Avatar.Icon {...props} icon="account" size={200} color='white' style={{backgroundColor: 'gray'}}/>
            <SpaceView vertical={20}/>
            <Subheading>00:37 min</Subheading>
            <Button mode='outlined' style={{ marginTop: 30 }} onPress={showModal}>
                Mostrar Informações de Chamada
            </Button>
            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                <TextInput
                    label='Assunto'
                    mode='outlined'
                    multiline
                    maxLength={100}
                    numberOfLines={5}
                    autoCorrect={false}
                    value={writtenText}
                    onChangeText={(text) => { onChangeText(text) }}
                />
                <SpaceView vertical={20} />
                <Button
                    color='#C4302B'
                    contentStyle={{ width: 380, height: 50 }}
                    mode="contained"
                    onPress={() => { onPressEndCall(newList.id) }}
                >
                    <FontAwesome name="phone" size={30} color="white" />
                </Button>
            </Modal>
        </Container>
    )
}

export default CallProgress
/*style={{width:'100%', height: 50, backgroundColor: '#C4302B'}}*/