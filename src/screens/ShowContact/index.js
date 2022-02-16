import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button, Card, IconButton, List } from 'react-native-paper';
import { token } from '../../global/helpers/constants';
import api from '../../services/api';
import { Container } from './styles';

const ShowContact = () => {

    useEffect(() => {
        const loadCalls = () => {
            const response = api.get(`/api/Telefone/${token}/contato/{idContato}`)
        }
    }, [])

    return (
        <Container>
            <Card.Title
                title="Card Title"
                subtitle="Card Subtitle"
                left={(props) => <IconButton {...props} icon="phone" onPress={() => { }} />}
                right={(props) => <IconButton icon="trash-can-outline"
                color='blueviolet'
                size={40}
                onPress={() => console.log('Pressed')}
            />
        }
            />
            <IconButton icon="trash-can-outline"
                color='blueviolet'
                size={40}
                onPress={() => console.log('Pressed')}
            />
            <IconButton icon="account-edit"
                color='blueviolet'
                size={40}
                onPress={() => console.log('Pressed')}
            />


        </Container>
    )
}

export default ShowContact;