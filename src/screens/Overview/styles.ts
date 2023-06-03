import styled, { css } from "styled-components/native";

export type OverviewStyleProps = {
  status: 'positive' | 'negative';
}

export const Container = styled.SafeAreaView<OverviewStyleProps>`
  flex: 1;
  background-color: ${({ theme, status }) =>
    status === 'positive' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding-top: 24px;
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const Header = styled.View`
  height: 140px;
  align-items: center;
  justify-content: center;

  position: relative;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_2};
  `}
`;

export const BackButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  position: absolute;
  left: 24px;
  top: 16px;
`;

export const StatsContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  padding: 32px 24px;

  row-gap: 16px;
`;

export const StatsText = styled.Text`
 text-align: center;
 margin-bottom: 8px;

 ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const StatsGroup = styled.View`
  flex-direction: row;
  column-gap: 12px;
  width: 100%;
`;