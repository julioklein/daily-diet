import styled, { css } from "styled-components/native";

export type StatsCardStyleProps = {
  status?: 'positive' | 'negative' | 'neutral';
}

export const Container = styled.View<StatsCardStyleProps>`
  padding: 16px;

  align-items: center;
  justify-content: center;

  flex-shrink: 1;
  border-radius: 8px;

  ${({ theme, status }) => css`
    background-color: ${
      status === 'positive' ? theme.COLORS.GREEN_LIGHT :
      status === 'negative' ? theme.COLORS.RED_LIGHT :
      theme.COLORS.GRAY_6
    };
  `}
`;

export const Total = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
    margin-bottom: 8px;
  `}
`;

export const Text = styled.Text`
${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
    text-align: center;
  `}
`;