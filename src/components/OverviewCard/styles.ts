import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export type OverviewCardStyleProps = {
  status?: 'positive' | 'negative'
};

export const Container = styled(TouchableOpacity) <OverviewCardStyleProps>`
  height: 102px;
  width: 100%;

  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 8px;

  ${({ theme, status }) => css`
    background-color: ${status === 'positive' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  `}
`;

export const NavigtionButton = styled.View`
  position: absolute;
  right: 8px;
  top: 8px;
`;

export const Icon = styled(ArrowUpRight).attrs<OverviewCardStyleProps>(({ theme, status }) => ({
  size: 24,
  color: status === 'positive' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))<OverviewCardStyleProps>``

export const Percentage = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_2};
  `}
`;