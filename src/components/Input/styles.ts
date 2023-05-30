import styled, { css } from "styled-components/native";
import { TextInput as RNTextInput } from "react-native";

export const Container = styled.View`
  flex-shrink: 1;
  width: 100%;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_2};
  `};
  
  margin-bottom: 4px;
`;

export const TextInput = styled(RNTextInput)`
  width: 100%;
  flex-shrink: 1;
  padding: 14px;
  
  border-width: 1px;
  border-radius: 6px;

  ${({ theme, multiline }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_1};
    border-color: ${theme.COLORS.GRAY_5};

    min-height: ${multiline ? '120px' : '48px'};
    max-height: ${multiline ? '120px' : '48px'};
  `};
`;