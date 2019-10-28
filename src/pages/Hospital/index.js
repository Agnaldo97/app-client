import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import api from '../../services/api';

import {
    Container,
    Title,
    Hospital,
    HostipalTitle,
    HostipalDescription,
    Phone,
    ListHospital,
    IconHospital,
    ViewHospital,
} from './styles';

export default function Main() {
    const [data, setData] = useState([1]);

    useEffect(() => {
        async function getHospital() {
            const response = await api.get('private/hospital');
            setData(response.data);
        }

        getHospital();
    }, []);

    function renderHospital({ item }) {
        return (
            <Hospital key={Number(item.id)}>
                <ListHospital>
                    <IconHospital name="local-hospital" size={50} />
                    <ViewHospital>
                        <HostipalTitle>{item.name}</HostipalTitle>
                        <HostipalDescription>
                            {item.address}
                        </HostipalDescription>
                        <Phone>{item.phone}</Phone>
                    </ViewHospital>
                </ListHospital>
            </Hospital>
        );
    }

    return (
        <Container>
            <Title>Clique no hospital que deseja enviar sua solicitação</Title>
            <FlatList
                vertical
                data={data}
                // extraData={amount}
                keyExtractor={item => String(item.id)}
                renderItem={renderHospital}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
}
