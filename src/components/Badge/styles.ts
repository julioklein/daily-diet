import styled, { css } from "styled-components/native";

export type BadgeStyleProps = {
  healthy: boolean;
};

export const Container = styled.View`
  height: 34px;
  padding: 0 16px;

  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  border-radius: 32px;
`;

export const Badge = styled.View<BadgeStyleProps>`
  height: 8px;
  width: 8px;
  margin-right: 8px;
  border-radius: 4px;
  background-color: ${({ theme, healthy }) => healthy ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`;

export const BadgeText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_1};
  `};
`;