import styled from 'styled-components/native';
import Button from '../../components/Button';
import { Background } from '../../components/Background';

export const Container = styled(Background)``;

export const TButton = styled(Button)`
    width: 100%;
`;

export const Wrappe = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    padding: 10px;
`;

export const Title = styled.Text`
    font-size: 28px;
    color: #fff;
    margin-top: 50px;
    margin-bottom: 30px;
`;
