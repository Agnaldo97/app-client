import React, { useState } from 'react';
import { Alert } from 'react-native';
import api from '../../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Wrappe, Title, TButton, InputCpf } from './styles';

export default function AudioInformation({ navigation }) {
    const [cpf, setCpf] = useState('');
    function handleSubmit() {
        api.get('public/patient/' + cpf).then(response => {
            AsyncStorage.setItem('patient:key', JSON.stringify(response.data.patient));
            AsyncStorage.setItem('ccess-token:key', response.data.patient.accessToken);
            navigation.navigate('RecordAudio');
        }).catch((err) => {
            Alert.alert('CPF inválido ou já em uso');
        })
    }

    return (
        <Container>
            <Wrappe>
                <Title>
                    Olá, vamos começar, para agilizar o atendimento, informe o
                    CPF do paciente.
                </Title>

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
