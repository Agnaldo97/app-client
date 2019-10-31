import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';

import api from '../../services/api';

import {
    Container,
    Title,
    VHospital,
    HostipalTitle,
    HostipalDescription,
    Phone,
    ListHospital,
    IconHospital,
    ViewHospital,
} from './styles';

export default function Hospital({ navigation }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getHospital() {
            const response = await api.get('private/hospital');
            setData(response.data);
            setLoading(false);
        }

        getHospital();
    }, []);

    function renderHospital({ item }) {
        return (
            <VHospital key={Number(item.id)}>
                <ListHospital
                    onPress={() => {
                        navigation.navigate('Maps');
                    }}
                >
                    <IconHospital name="local-hospital" size={50} />
                    <ViewHospital>
                        <HostipalTitle>{item.name}</HostipalTitle>
                        <HostipalDescription>
                            {item.address}
                        </HostipalDescription>
                        <Phone>{item.phone}</Phone>
                    </ViewHospital>
                </ListHospital>
            </VHospital>
        );
    }

    return (
        <Container>
            {loading ? (
                <ActivityIndicator size="large" />
            ) : (
                <>
                    <Title>
                        Clique no hospital que deseja enviar sua solicitação
                    </Title>
                    <FlatList
                        vertical
                        data={data}
                        // extraData={amount}
                        keyExtractor={item => String(item.id)}
                        renderItem={renderHospital}
                        showsVerticalScrollIndicator={false}
                    />
                </>
            )}
        </Container>
    );
}
