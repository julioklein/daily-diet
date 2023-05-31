import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 24px;
  
  background-color: rgba(0,0,0,0.5);
`;

export const Content = styled.View`
  height: 192px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-radius: 8px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_1};
  `}

  padding: 0 24px;
  text-align: center;
  margin-bottom: 32px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  padding: 0 20px;
  
  flex-direction: row;
  column-gap: 12px;
`;