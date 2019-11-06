import React, { useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import qrcode from '../../assets/qr-code.png';

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
                AsyncStorage.setItem(
                    'patient:key',
                    JSON.stringify(response.data.patient)
                );
                AsyncStorage.setItem(
                    'ccess-token:key',
                    response.data.patient.accessToken
                );
                navigation.navigate('RecordAudio');
                setHistoric(response.data.patient.historics);
                console.tron.log(historic);
            })
            .catch(err => {
                if (
                    err.response.data.error_description ===
                    'Is not possible more one attendance'
                ) {
                    Alert.alert(
                        'Já existe um atendimento',
                        'em andamento com esse CPF. Deseja começar um novo?',
                        [
                            {
                                text: 'Não',
                                onPress: () => console.log('Cancel Pressed'),
                                style: 'cancel',
                            },
                            {
                                text: 'Sim',
                                onPress: () =>
                                    api
                                        .delete(`private/attendance/${cpf}`)
                                        .then(() => {
                                            api.get(`public/patient/${cpf}`)
                                                .then(response => {
                                                    AsyncStorage.setItem(
                                                        'patient:key',
                                                        JSON.stringify(
                                                            response.data
                                                                .patient
                                                        )
                                                    );
                                                    AsyncStorage.setItem(
                                                        'ccess-token:key',
                                                        response.data.patient
                                                            .accessToken
                                                    );
                                                    navigation.navigate(
                                                        'RecordAudio'
                                                    );
                                                })
                                                .then(() => {
                                                    navigation.navigate(
                                                        'RecordAudio'
                                                    );
                                                });
                                        })
                                        .catch(err => {
                                            Alert.alert(
                                                'Erro ao encerrar o atendimento'
                                            );
                                        }),
                            },
                        ]
                    );
                } else {
                    Alert.alert('CPF não localizado');
                }
            });
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
