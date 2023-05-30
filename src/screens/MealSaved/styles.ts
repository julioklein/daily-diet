import styled, { css } from "styled-components/native";

export type MealSavedStyleProps = {
  status?: 'positive' | 'negative';
}

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Content = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<MealSavedStyleProps>`
  ${({ theme, status }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${status === 'positive' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `}

  text-align: center;
  margin-bottom: 8px;
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
  `}

  text-align: center;
  margin-bottom: 40px;
`;

export const Bold = styled(Text)`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Illustration = styled.Image`
  margin-bottom: 32px;
`;