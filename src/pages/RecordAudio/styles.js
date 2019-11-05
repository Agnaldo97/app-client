import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../../components/Button';
import { Background } from '../../components/Background';

export const Container = styled(Background)``;

export const Wrappe = styled.View`
    flex: 1;
    justify-content: space-between;
    align-items: center;
    padding: 15px 10px;
`;

export const Title = styled.Text`
    font-size: 28px;
    color: #fff;
`;

export const Time = styled.Text`
    font-weight: bold;
    font-size: 50px;
    color: #999;
    margin-top: 30px;
`;

export const MergeImagens = styled.View`
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin-top: -50px;
    margin-bottom: 50px;
`;

export const ViewMicrophone = styled.View`
    background: #fff;
    border-radius: 50px;
    top: 120px;
`;

export const IconMicrophone = styled(Icon)`
    color: #000;
`;

export const ViewStop = styled.View`
    background: #fff;
    border-radius: 50px;
    width: 100px;
    height: 100px;
`;

export const Stop = styled.View`
    background: red;
    width: 40px;
    height: 40px;
    display: flex;
    align-self: center;
    margin-top: 30px;
    /* justify-self: center; */
`;

export const TButton = styled(Button)`
    width: 100%;
    margin-bottom: 40px;
`;
