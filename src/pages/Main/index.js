import React from 'react';
import Proptypes from 'prop-types';
import { Image } from 'react-native';
import MainImage from '../../assets/home.png';

import {
    Container,
    Wrappe,
    Title,
    TButton,
    SkipIntroduction,
    ButtonSkipIntroduction,
} from './styles';

export default function Main({ navigation }) {
    return (
        <Container>
            <Wrappe>
                <ButtonSkipIntroduction
                    onPress={() => navigation.navigate('CPF')}
                >
                    <SkipIntroduction>Pular introdução</SkipIntroduction>
                </ButtonSkipIntroduction>
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
