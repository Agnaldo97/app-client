import React from 'react';
// import { View } from 'react-native';

import {
    Container,
    TypeTitle,
    TypeDescription,
    // TypeImage,
    ViewD,
    // RequestButtonText,
} from './styles';

export default function Details() {
    return (
        <Container>
            <ViewD>
                <TypeTitle>Destino: </TypeTitle>
                <TypeDescription>Viagens baratas</TypeDescription>
            </ViewD>
            <ViewD>
                <TypeTitle>Duração: </TypeTitle>
                <TypeDescription>60 minutos</TypeDescription>
            </ViewD>
        </Container>
    );
}
