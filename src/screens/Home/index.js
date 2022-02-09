
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import HomeView from './view';

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

    const viewProps = {
        list
    }

    return (
        <HomeView {...viewProps} />
    )
}

export default Home