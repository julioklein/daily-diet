import styled, { css } from "styled-components/native";
import { TouchableOpacity } from "react-native";

export type MealCardStyleProps = {
  healthy?: boolean;
}

export const Container = styled(TouchableOpacity)`
  height: 49px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  border-radius: 6px;
  border-width: 1px;
  margin-bottom: 8px;
  padding: 0 14px;
  
  ${({ theme }) => css`
    background-color: ${theme.COLORS.WHITE};
    border-color: ${theme.COLORS.GRAY_5};
  `}
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.XS}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Line = styled.View`
  height: 14px;
  width: 1px;
  margin: 0 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_4};
`;

export const Meal = styled.Text`
flex: 1;

${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `}
`;

export const Badge = styled.View<MealCardStyleProps>`
  height: 14px;
  width: 14px;
  margin-left: 8px;
  border-radius: 7px;
  background-color: ${({ theme, healthy }) => healthy ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;