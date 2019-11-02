import React, { useState, useEffect, useRef } from 'react';
import Voice from 'react-native-voice';
import { Image, TouchableOpacity, Alert } from 'react-native';

import circle from '../../assets/circle.png';

import {
    Container,
    Wrappe,
    Title,
    Time,
    MergeImagens,
    ViewMicrophone,
    IconMicrophone,
    ViewStop,
    Stop,
    TButton,
} from './styles';

export default function RecordAudio({ navigation }) {
    const [record, setRecord] = useState(false);
    const [results, setResult] = useState([]);

    const hour = '00';
    const [minute, setMinute] = useState('00');
    const [secunds, setSecunds] = useState('00');

    const [intervalo, setIntervalo] = useState(null);

    function useInterval(callback, delay) {
        const savedCallback = useRef();

        // Remember the latest function.
        useEffect(() => {
            savedCallback.current = callback;
        }, [callback]);

        // Set up the interval.
        useEffect(() => {
            function tick() {
                savedCallback.current();
            }
            if (delay !== null) {
                const id = setInterval(tick, delay);
                return () => clearInterval(id);
            }
        }, [delay]);
    }

    useInterval(() => {
        if (Number(secunds) === 60) {
            setMinute(`0${Number(Number(minute) + 1)}`);
            if (Number(minute) < 10) {
                setMinute(`0${Number(Number(minute) + 1)}`);
            } else {
                setMinute(`${Number(Number(minute) + 1)}`);
                setSecunds(0);
            }
        }

        if (Number(secunds) < 9) {
            setSecunds(`0${Number(Number(secunds) + 1)}`);
        } else if (Number(secunds) > 60) {
            setSecunds(`0${Number(Number(0) + 0)}`);
        } else {
            setSecunds(`${Number(Number(secunds) + 1)}`);
        }
    }, intervalo);

    function onSpeechResultsHandler(result) {
        setResult(result.value);
        setRecord(false);
        setIntervalo(null);
        setMinute('00');
        setSecunds('00');
        Alert.alert('Você disse?', result.value[0]);
        // navigation.navigate('Hospital');
    }

    function onStartButtonPress() {
        Voice.start('pt-BR');
        setIntervalo(1000);
    }

    function onStopButtonPress() {
        Voice.stop();
        setRecord(false);
        setIntervalo(null);
        setMinute('00');
        setSecunds('00');
    }

    function records() {
        if (!record) {
            onStartButtonPress();
            setRecord(true);
        } else {
            onStopButtonPress();
            setRecord(false);
        }
    }

    Voice.onSpeechResults = onSpeechResultsHandler.bind(this);

    function handleSubmit() {
        navigation.navigate('Hospital');
    }

    return (
        <Container>
            <Wrappe>
                <Title>
                    Agora, descreva para nós em poucas palavras o ocorrido.
                </Title>

                <Time>{`${hour}:${minute}:${secunds}`}</Time>
                <TouchableOpacity onPress={records}>
                    <MergeImagens>
                        <ViewMicrophone>
                            {record ? (
                                <>
                                    <ViewStop>
                                        <Stop />
                                    </ViewStop>
                                </>
                            ) : (
                                    <IconMicrophone
                                        name="keyboard-voice"
                                        size={100}
                                    />
                                )}
                        </ViewMicrophone>
                        <Image source={circle} />
                    </MergeImagens>
                </TouchableOpacity>
                <TButton onPress={handleSubmit}>ENTENDI</TButton>
            </Wrappe>
        </Container>
    );
}
