import React from 'react';
import { Button, FlatList } from 'react-native';
import ContactCard from '../../global/components/ContactCard';
import SpaceView from '../../global/components/SpaceView';
import { Container, Text } from "./styles";

const HomeView = (props) => {
    const { list} = props

    return (
        <Container>
            <SpaceView vertical={20}/>
            <Text>Lista de Contatos</Text>
            <SpaceView vertical={30}/>
            <FlatList
                data={list}
                keyExtractor={item => item.id}
                renderItem={({item}) => 
                    <ContactCard name={item.nome} phone={item.telefone}/>
                }
                ItemSeparatorComponent={() => <SpaceView vertical={6}/>}
            />
        </Container>
    )
}


 



export default HomeView