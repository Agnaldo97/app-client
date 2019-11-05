import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import api from '../../services/apiServer';

import {
    Container,
    ViewTitle,
    Title,
    List,
    IconHistoty,
    VHistoric,
    ViewInfo,
    HostipalTitle,
    DateCheckin,
    Attendance,
    Priority,
    Separator,
} from './styles';

export default function Historic() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getHistoric() {
            const response = await api.get('Historic');
            setData(response.data);
            setLoading(false);
        }

        getHistoric();
    }, []);

    function renderSeparator() {
        return <Separator />;
    }

    function renderHistoric({ item }) {
        // setLoading(false);
        return (
            <VHistoric key={Number(item.id)}>
                {/* <ViewInfo> */}
                <DateCheckin>{item.checkin}</DateCheckin>
                <HostipalTitle>{item.hospital}</HostipalTitle>
                <Attendance>10:20h</Attendance>
                <Priority>{item.priority}</Priority>

                {/* </ViewInfo> */}
            </VHistoric>
        );
    }

    return (
        <Container>
            {loading ? (
                <ActivityIndicator size="large" />
            ) : (
                <>
                    <ViewTitle>
                        <IconHistoty name="history" size={30} />
                        <Title>WILLIAM JOÃO VIEIRA</Title>
                    </ViewTitle>
                    <List
                        vertical
                        data={data}
                        // extraData={amount}
                        keyExtractor={item => String(item.id)}
                        renderItem={renderHistoric}
                        showsVerticalScrollIndicator={false}
                        // ItemSeparatorComponent={renderSeparator}
                    />
                </>
            )}
        </Container>
    );
}
