import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const ContainerQRCode = styled.View`
    padding: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const QRCode = styled.View`
    margin: 20px
`;

export const Title = styled.Text`
    margin-top: 10px;
    color: black;
    font-size: 25px;
    margin-bottom: 10px;
`;

export const TButton = styled(Button)`
    width: 100%;
    margin-bottom: 80px;
`;
