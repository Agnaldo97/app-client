import React, { useState } from 'react';
import { Alert } from 'react-native';
import qrcode from '../../assets/qr-code.png';

// import AsyncStorage from '@react-native-community/async-storage';
import api from '../../services/api';
import {
    Container,
    Wrappe,
    Title,
    TButton,
    InputCpf,
    ButtonQrcode,
    ImageQRcode,
} from './styles';

export default function Cpf({ navigation }) {
    const [cpf, setCpf] = useState('');
    const [historic, setHistoric] = useState([]);

    function handleSubmit() {
        api.get(`public/patient/${cpf}`)
            .then(response => {
                setHistoric(response.data.patient.historics);
                console.tron.log(historic);
                // AsyncStorage.setItem(
                //     'patient:key',
                //     JSON.stringify(response.data.patient)
                // );
                // AsyncStorage.setItem(
                //     'access-token',
                //     JSON.stringify(response.data.patient.accessToken)
                // );
                // console.tron.log(AsyncStorage.getItem());
                // console.tron.log(AsyncStorage.getItem('access-token:key'));
                navigation.navigate('ButtonsPage');
            })
            .catch(err => {
                // Alert.alert('CPF inválido ou já em uso');
            });
        navigation.navigate('ButtonsPage');
    }

    return (
        <Container>
            <Wrappe>
                <Title>
                    Olá, vamos começar, para agilizar o atendimento, informe o
                    CPF do paciente ou escaneie o QRcode.
                </Title>

                <ButtonQrcode
                    onPress={() => navigation.navigate('QRCodeScreen')}
                >
                    <ImageQRcode source={qrcode} />
                </ButtonQrcode>

                <InputCpf
                    placeholder="Informe o CPF"
                    onSubmitEditing={handleSubmit}
                    values={cpf}
                    onChangeText={setCpf}
                />

                <TButton onPress={handleSubmit}>CONTINUAR</TButton>
            </Wrappe>
        </Container>
    );
}

Cpf.navigationOptions = {
    headerTitle: 'Meu perfil',
};
