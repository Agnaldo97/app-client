import styled from 'styled-components/native';

export const Container = styled.View`
    background: #fff;
    height: 150px;
    width: 100%;
    position: absolute;
    bottom: 0;
    shadow-color: #000;
    shadow-offset: 0 0;
    shadow-opacity: 0.2;
    shadow-radius: 10;
    elevation: 3;
    border: 1px solid #ddd;
    padding: 20px;
`;

export const TypeTitle = styled.Text`
    font-size: 18px;
    color: #222;
`;

export const TypeDescription = styled.Text`
    color: #666;
    font-size: 16px;
`;

export const RequestButton = styled.TouchableOpacity`
    background: #222;
    justify-content: center;
    align-items: center;
    height: 44px;
    align-self: stretch;
    margin-top: 12px;
`;

export const RequestButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;

export const ViewD = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const ButtonBack = styled.TouchableOpacity`
    position: absolute;
    margin-top: 40px;
    margin-left: 20px;
    background: #fff;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    flex: 1;
    justify-content: center;
`;

export const ImageBach = styled.Image`
    width: 35px;
    align-self: center;
`;
