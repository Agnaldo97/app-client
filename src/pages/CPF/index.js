import React, { useState } from 'react';

import { Container, Wrappe, Title, TButton, InputCpf } from './styles';

export default function AudioInformation({ navigation }) {
    const [cpf, setCpf] = useState('');
    function handleSubmit() {
        navigation.navigate('RecordAudio');
    }

    return (
        <Container>
            <Wrappe>
                <Title>
                    Olá, vamos começar, para agilizar o atendimento, informe o
                    CPF da criança.
                </Title>

                <InputCpf
                    placeholder="Informe seu CPF"
                    onSubmitEditing={handleSubmit}
                    values={cpf}
                    onChangeText={setCpf}
                />

                <TButton onPress={handleSubmit}>ENTENDI</TButton>
            </Wrappe>
        </Container>
    );
}
