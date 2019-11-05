import styled from 'styled-components/native';
import Button from '../../components/Button';
import { Background } from '../../components/Background';

export const Container = styled(Background)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px 10px;
`;

export const ButtonRecords = styled(Button)`
    width: 100%;
    margin-bottom: 40px;
`;

export const ButtonHistoric = styled(Button)`
    width: 100%;
    margin-top: 40px;
`;
