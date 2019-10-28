import React from 'react';

import { Image } from 'react-native';
import MainImage from '../../assets/audioInformation.png';

import { Container, Wrappe, Title, TButton } from './styles';

export default function AudioInformation({ navigation }) {
    return (
        <Container>
            <Wrappe>
                <Image source={MainImage} />
                <Title>
                    Grave em poucos minutos o ocorrido, diga o que sua criança
                    tem.
                </Title>
                <TButton onPress={() => navigation.navigate('CPF')}>
                    ENTENDI
                </TButton>
            </Wrappe>
        </Container>
    );
}
