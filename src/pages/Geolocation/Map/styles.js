import styled, { css } from 'styled-components/native';
import MapView from 'react-native-maps';
import { Platform } from 'react-native';
import { Background } from '../../../components/Background';

export const ViewMap = styled(Background)``;

export const Map = styled(MapView)`
    flex: 1;
`;

export const LocationBox = styled.View`
    background: #fff;
    shadow-color: #000;
    shadow-offset: 0;
    shadow-opacity: 0.1;
    elevation: 1;
    border: 1px solid #ddd;
    border-radius: 3px;
    flex-direction: row;

    ${Platform.select({
        ios: css`
            margin-top: 20px;
        `,
        android: css`
            margin-top: 20px;
            margin-left: 20px;
        `,
    })}
`;

export const LocationText = styled.Text`
    margin: 8px 10px;
    font-size: 14px;
    color: #333;
`;

export const LocationTimeBox = styled.View`
    background: #222;
    padding: 3px 8px;
`;

export const LocationTimeText = styled.Text`
    color: #fff;
    font-size: 12px;
    text-align: center;
`;

export const LocationTimeMin = styled.Text`
    color: #fff;
    font-size: 12px;
    text-align: center;
`;
