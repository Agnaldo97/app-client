import React, { useState } from 'react';
import { Alert } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import api from '../../services/api';

import { Container, Camera } from './styles';

export default function QRCodeScreen({ navigation }) {
    const [cpf, setCpf] = useState('12345678910');
    const [historic, setHistoric] = useState([]);

    let scanner = null;

    function onSuccess() {
        api.get(`public/patient/${cpf}`)
            .then(response => {
                setHistoric(response.data.patient.historics);
                console.tron.log(historic);
                navigation.navigate('ButtonsPage');
            })
            .catch(err => {
                // Alert.alert('CPF inválido ou já em uso');
                navigation.navigate('CPF');
            });
    }

    return (
        <Container>
            <QRCodeScanner
                onRead={onSuccess}
                showMarker
                checkAndroid6Permissions
                ref={elem => {
                    scanner = elem;
                }}
                cameraStyle={Camera}
            />
        </Container>
    );
}

QRCodeScreen.navigationOptions = {
    header: null,
};
