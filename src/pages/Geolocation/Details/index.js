import React from 'react';

import { Image } from 'react-native';
import {
    Container,
    TypeTitle,
    TypeDescription,
    ViewD,
    RequestButton,
    RequestButtonText,
    ButtonBack,
    ImageBach,
} from './styles';
import back from '../../../assets/back.png';

export default function Details({ destination, duration, navigation }) {
    return (
        <>
            <ButtonBack
                onPress={() => {
                    navigation.navigate('Hospital');
                }}
            >
                <ImageBach source={back} />
            </ButtonBack>
            <Container>
                <ViewD>
                    <TypeTitle>Destino: </TypeTitle>
                    <TypeDescription>{destination}</TypeDescription>
                </ViewD>
                <ViewD>
                    <TypeTitle>Tempo estimado: </TypeTitle>
                    <TypeDescription>{`${duration} Minutos`}</TypeDescription>
                </ViewD>

                <RequestButton
                    onPress={() => {
                        navigation.navigate('QRCodePage');
                    }}
                >
                    <RequestButtonText>Avançar</RequestButtonText>
                </RequestButton>
            </Container>
        </>
    );
}
