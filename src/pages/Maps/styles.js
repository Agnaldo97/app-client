import styled from 'styled-components/native';
import MapView from 'react-native-maps';

import { Background } from '../../components/Background';

export const ViewMap = styled(Background)`
    /* flex: 1; */
    background: #281589;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Map = styled(MapView)``;
