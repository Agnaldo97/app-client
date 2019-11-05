import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Background } from '../../components/Background';

export const Container = styled(Background)`
    padding: 15px;
`;

export const Title = styled.Text`
    font-size: 25px;
    color: #df8d2c;
`;

export const IconHistoty = styled(Icon)`
    color: #df8d2c;
    margin-right: 15px;
`;

export const ViewTitle = styled.View`
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 15px;
`;

export const List = styled.FlatList`
    background: #fff;
    border-radius: 4px;
    /* margin-bottom: 10px; */
`;

export const VHistoric = styled.View`
    padding-bottom: 15px;
    margin-bottom: 9px;
`;

export const ViewInfo = styled.View``;

export const HostipalTitle = styled.Text`
    display: flex;
    justify-content: center;
    width: 100%;
    color: #333;
    font-size: 16px;
    line-height: 20px;
`;

export const DateCheckin = styled.Text`
    margin-left: 10px;
    color: #999;
`;

export const Attendance = styled.Text``;

export const Priority = styled.Text``;

export const Separator = styled.View`
    height: 0.5px;
    width: 100%;
    align-self: center;
    background: #999;
    margin-bottom: 10px;
`;
