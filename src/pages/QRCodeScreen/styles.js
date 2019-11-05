import styled from 'styled-components/native';
import { Dimensions, StyleSheet } from 'react-native';

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    background: black;
`;

export const Camera = StyleSheet.create({
    height: Dimensions.get('window').height,
});
