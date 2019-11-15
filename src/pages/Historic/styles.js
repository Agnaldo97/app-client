import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Background } from '../../components/Background';

export const Container = styled(Background)`
    padding: 15px;
`;

export const Title = styled.Text`
    font-size: 30px;
    color: #ffae00;
`;

export const IconHistoty = styled(Icon)`
    color: #ffae00;
    margin-right: 15px;
`;

export const ViewTitle = styled.View`
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 10px;
`;

export const List = styled.FlatList`
    border-radius: 4px;
    margin-top: 15px;
`;

export const VHistoric = styled.View``;

export const ViewInfo = styled.View`
    display: flex;
    background: #fff;
    border-radius: 4px;
    padding: 15px;
    margin-bottom: 7px;
`;

export const HostipalTitle = styled.Text`
    display: flex;
    justify-content: center;
    width: 100%;
    color: #333;
    font-size: 18px;
    line-height: 20px;
    font-weight: bold;
`;

export const DateCheckin = styled.Text`
    margin-left: 3px;
    color: #777;
`;

export const Checkin = styled.Text`
    color: #333;
    font-weight: bold;
`;

export const Attendance = styled.Text`
    margin-left: 3px;
    color: #777;
`;

export const InitAttendance = styled.Text`
    color: #333;
    font-weight: bold;
`;

export const Priority = styled.Text`
    margin-left: 3px;
    color: #555;
    background: #7fff00;
    padding: 2px;
`;

export const PriorityLevel = styled.Text`
    color: #333;
    font-weight: bold;
`;

export const SubTitle = styled.Text`
    color: #d3d3d3;
    font-size: 15px;
    margin-top: 4px;
    padding: 0 0 4px 0;
`;

export const ViewM = styled.View``;

export const ViewCheckin = styled.View`
    margin-top: 5px;
    flex-direction: row;
`;

export const ViewAttendance = styled.View`
    flex-direction: row;
`;

export const ViewPriority = styled.View`
    flex-direction: row;
`;
