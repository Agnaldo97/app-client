import React from 'react';

// import Lottie from 'lottie-react-native';
import { Container, ButtonRecords, ButtonHistoric } from './styles';

// import pulse from '../../assets/ animation/pulse.json';

export default function ButtonsPage({ navigation }) {
    return (
        <Container>
            <ButtonRecords onPress={() => navigation.navigate('TopNavigation')}>
                NOVA SEÇÃO
            </ButtonRecords>
            <ButtonHistoric
                onPress={() => navigation.navigate('TopNavigation')}
            >
                VER HISTÓRICO
            </ButtonHistoric>
            {/* <Lottie
                autoSize
                source={pulse}
                resizeMode="contain"
                autoPlay
                loop
            /> */}
        </Container>
    );
}
