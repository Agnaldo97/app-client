import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Background } from '../../components/Background';

export const Container = styled(Background)`
    padding: 15px;
`;

export const Title = styled.Text`
    margin-top: 10px;
    color: #fff;
    font-size: 25px;
    margin-bottom: 10px;
`;

export const Hospital = styled.View``;

export const ListHospital = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: #fff;
    margin-bottom: 20px;
    border-radius: 4px;
`;

export const ViewHospital = styled.View``;

export const HostipalTitle = styled.Text`
    margin-top: 8px;
    font-size: 16px;
    font-weight: bold;
    color: #333;
`;

export const HostipalDescription = styled.Text.attrs({
    numberOfLines: 3,
})`
    color: #808080;
    margin-top: 5px;
    line-height: 18px;
    max-width: 90%;
`;

export const Phone = styled.Text`
    color: #808080;
    margin-top: 3px;
    margin-bottom: 8px;
`;

export const IconHospital = styled(Icon)`
    margin-left: 5px;
    margin-right: 5px;
    color: #333;
`;
