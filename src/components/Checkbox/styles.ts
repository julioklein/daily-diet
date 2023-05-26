import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type CheckboxStyleProps = {
  checked?: boolean;
  variant?: "positive" | "negative";
};

export const Container = styled(TouchableOpacity) <CheckboxStyleProps>`
  flex: 1;
  min-height: 50px;
  max-height: 50px;

  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  border-width: 1px;
    
  ${({ theme, checked, variant }) => css`
    background-color: ${checked ?
      variant === "positive" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6};

     border-color: ${checked ?
      variant === "positive" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
      : theme.COLORS.GRAY_6};
  `}
`;

export const Badge = styled.View<CheckboxStyleProps>`
  height: 8px;
  width: 8px;
  border-radius: 4px;
  margin-right: 8px;

  ${({ theme, variant }) => css`
    background-color: ${variant === "positive" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `};
`;

export const Text = styled.Text`
${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;
