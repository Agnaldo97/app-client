import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import {
    Container,
    ViewM,
    ViewTitle,
    Title,
    SubTitle,
    List,
    IconHistoty,
    VHistoric,
    ViewInfo,
    HostipalTitle,
    DateCheckin,
    Checkin,
    InitAttendance,
    Attendance,
    PriorityLevel,
    Priority,
    ViewCheckin,
    ViewAttendance,
    ViewPriority,
} from './styles';

export default function Historic() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const historic = useSelector(state => state.historic);

    useEffect(() => {
        setData(historic);
    }, [historic]);

    function renderHistoric({ item }) {
        setLoading(false);
        return (
            <VHistoric key={Number(item.id)}>
                <ViewInfo>
                    <HostipalTitle>Hospital Rios DOr</HostipalTitle>

                    <ViewCheckin>
                        <Checkin>Data de Entrada |</Checkin>
                        <DateCheckin>15/10/2019 | 15:00h</DateCheckin>
                    </ViewCheckin>

                    <ViewAttendance>
                        <InitAttendance>Início do Atendimento |</InitAttendance>
                        <Attendance>10:20h</Attendance>
                    </ViewAttendance>

                    <ViewPriority>
                        <PriorityLevel>Prioridade |</PriorityLevel>
                        <Priority>Alta</Priority>
                    </ViewPriority>
                </ViewInfo>
            </VHistoric>
        );
    }

    return (
        <Container>
            {loading ? (
                <ActivityIndicator size="large" />
            ) : (
                <>
                    {data.map(d => (
                        <>
                            <ViewM>
                                <ViewTitle>
                                    <IconHistoty name="history" size={30} />
                                    <Title>{d.name}</Title>
                                </ViewTitle>
                                <SubTitle>CPF: {d.cpf}</SubTitle>
                                <SubTitle>Tel: {d.phone}</SubTitle>
                                <SubTitle>Nascimento: {d.birthDate}</SubTitle>
                            </ViewM>
                            <List
                                vertical
                                data={d.historics}
                                // key={d.historics.id}
                                // extraData={amount}
                                keyExtractor={item => String(item.id)}
                                renderItem={renderHistoric}
                                showsVerticalScrollIndicator={false}
                            />
                        </>
                    ))}
                </>
            )}
        </Container>
    );
}
