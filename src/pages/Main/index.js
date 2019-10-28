import React from 'react';

import { Image } from 'react-native';
import MainImage from '../../assets/home.png';

import { Container, Wrappe, Title, TButton } from './styles';

export default function Main({ navigation }) {
    return (
        <Container>
            <Wrappe>
                <Image source={MainImage} />
                <Title>
                    Precisamos coletar alguns dados para agilizar seu
                    atendimento.
                </Title>
                <TButton
                    onPress={() => navigation.navigate('AudioInformation')}
                >
                    ENTENDI
                </TButton>
            </Wrappe>
        </Container>
    );
}
