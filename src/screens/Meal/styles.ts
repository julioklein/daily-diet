import styled, { css } from "styled-components/native";

export type MealStyleProps = {
  status?: 'positive' | 'negative';
}

export const Container = styled.SafeAreaView<MealStyleProps>`
  flex: 1;
  background-color: ${({ theme, status }) =>
    status === 'positive' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Header = styled.View`
  height: 104px;
  width: 100%;
  align-items: center;
`;

export const BackButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  position: absolute;
  left: 24px;
  top: 16px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_1};
  `}
  padding-top: 16px;
`;

export const Content = styled.View`
  flex: 1;
  align-items: flex-start;
  padding: 40px 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const Meal = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_1};
  `}

  margin-bottom: 8px;
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_2};
  `}

  margin-bottom: 24px;
`;

export const DateAndTimeLabel = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_1};
  `}

  margin-bottom: 8px;
`;

export const DateAndTime = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_2};
  `}

  margin-bottom: 24px;
`;

export const ContentSafeArea = styled.SafeAreaView`
  background-color: ${({theme}) => theme.COLORS.GRAY_7};
`;

export const ButtonContainer = styled.View`
  height: 96px;
  width: 100%;
  margin-top: auto;
  row-gap: 8px;
`;