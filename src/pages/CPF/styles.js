import styled from 'styled-components/native';
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
    margin-top: 10%;
    margin-bottom: 8px;
`;

export const InputCpf = styled.TextInput`
    background: #fff;
    color: #333;
    font-size: 20px;
    width: 100%;
    border-radius: 4px;
    margin-bottom: 8px;
`;

export const TButton = styled(Button)`
    width: 100%;
    margin-bottom: 40px;
`;

export const ButtonQrcode = styled.TouchableOpacity``;

export const ImageQRcode = styled.Image`
    background: #fff;
    width: 80px;
    height: 80px;
    border-radius: 5px;
`;
