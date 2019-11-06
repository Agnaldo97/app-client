import React, { useState, useEffect } from 'react';
import QRCode from 'react-native-qrcode-svg';
import AsyncStorage from '@react-native-community/async-storage';
import { Title, Container, TButton, ContainerQRCode } from './styles';

export default function QRCodePage({ navigation }) {
    const [cpf, setCpf] = useState();
    useEffect(() => {
        async function getPatient() {
            const patient = JSON.parse(
                await AsyncStorage.getItem('patient:key')
            );
            setCpf(patient.cpf);
        }
        getPatient();
    }, []);
    return (
        <Container>
            <Title>Apresente esse QRCode na entrada do hospital</Title>
            <ContainerQRCode>
                <QRCode
                    value={cpf}
                    size={250}
                    color="black"
                    backgroundColor="white"
                    logoSize={30}
                    logoMargin={2}
                    logoBorderRadius={15}
                    logoBackgroundColor="yellow"
                />
            </ContainerQRCode>
            <TButton onPress={() => navigation.navigate('Maps')}>
                VOLTAR
            </TButton>
        </Container>
    );
}
