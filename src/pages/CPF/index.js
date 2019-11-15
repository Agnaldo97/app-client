import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { ActivityIndicator } from 'react-native';
import { ConfirmDialog } from 'react-native-simple-dialogs';

import AsyncStorage from '@react-native-community/async-storage';
import qrcode from '../../assets/qr-code.png';
import * as HistoricActions from '../../store/modules/historic/actions';

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
    const dispatch = useDispatch();
    const [dialogVisible, setDialogVisible] = useState(false);
    const [cpfInvalid, setCpfInvalid] = useState(false);
    const [messageText, setMessageText] = useState('');

    function newSession() {
        api.delete(`private/attendance/${cpf}`)
            .then(() => {
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
                        dispatch(
                            HistoricActions.addToHistoricRequest(
                                response.data.patient
                            )
                        );
                    })
                    .then(() => {
                        navigation.navigate('TopNavigation');
                    });
            })
            .catch(err => {
                setMessageText('Erro ao encerrar o atendimento');
                setCpfInvalid(true);
            });
    }

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
                navigation.navigate('TopNavigation');
                setHistoric(response.data.patient.historics);
                console.tron.log(historic);
            })
            .catch(err => {
                console.tron.log(err.response.data.error_description);
                if (err.response.data.error_description !== 'Bad credentials') {
                    setMessageText(
                        'Já existe um atendimento em andamento com esse CPF. Deseja começar um novo?'
                    );
                    setDialogVisible(true);
                } else {
                    setMessageText('CPF não localizado!');
                    setCpfInvalid(true);
                }
            });
    }

    return (
        <Container>
            <Wrappe>
                <>
                    <ConfirmDialog
                        title="Atenção"
                        message={`${messageText}`}
                        visible={dialogVisible}
                        positiveButton={{
                            title: 'SIM',
                            onPress: () => newSession(),
                        }}
                        negativeButton={{
                            title: 'NÃO',
                            onPress: () => setDialogVisible(false),
                        }}
                    />

                    <ConfirmDialog
                        title="Atenção"
                        message={`${messageText}`}
                        visible={cpfInvalid}
                        positiveButton={{
                            title: 'OK',
                            onPress: () => setCpfInvalid(false),
                        }}
                    />
                </>
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
