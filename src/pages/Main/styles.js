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
    /* color: #fff; */
`;

export const TButton = styled(Button)`
    width: 100%;
    margin-bottom: 40px;
`;

export const ButtonSkipIntroduction = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-self: flex-end;
`;

export const SkipIntroduction = styled.Text`
    /* color: #fff; */
    font-size: 16px;
    font-weight: bold;
`;
