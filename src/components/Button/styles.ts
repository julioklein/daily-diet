import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type ButtonStyleProps = {
  variant?: "primary" | "secondary";
}

export const Container = styled(TouchableOpacity) <ButtonStyleProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  max-height: 50px;
  border-radius: 6px;
  border-width: 1px;

  ${({ theme, variant }) => css`
    background-color: ${variant === 'primary' ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
    border-color: ${theme.COLORS.GRAY_2};
  `}
`;

export const Text = styled.Text<ButtonStyleProps>`
  ${({ theme, variant }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${variant === 'primary' ? theme.COLORS.WHITE : theme.COLORS.GRAY_1};
    margin-left: 12px;
  `}
`;

