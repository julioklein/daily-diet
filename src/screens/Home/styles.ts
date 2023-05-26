import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const ScreenTitle = styled.Text`
  font-size: 32px;
  font-family: Nunito-Bold;
`;