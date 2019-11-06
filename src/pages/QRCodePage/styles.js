import styled from 'styled-components/native';
import Button from '../../components/Button';

export const Container = styled.View`
    padding: 15px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const ContainerQRCode = styled.View`
    padding: 10px;
    background: #fff;
`;
export const QRCode = styled.View``;

export const Title = styled.Text`
    font-size: 28px;
    color: #fff;
`;

export const TButton = styled(Button)`
    width: 100%;
    margin-bottom: 40px;
`;
