import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
  flex: 1;
  padding: 0 24px;
`;

export const Header = styled.View`
  margin-top: 24px;
  margin-bottom: 32px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.Image``;

export const Avatar = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  border-width: 2px;
  
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_6};
    border-color: ${theme.COLORS.GRAY_2};
  `}
`;

export const OverViewArea = styled.View`
  margin-bottom: 40px;
`;

export const NewMealSection = styled.View`
  margin-bottom: 32px;
`;

export const Text = styled.Text`
 ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
    margin-bottom: 8px;
  `}
`;

export const DateWrapper = styled.View`
  width: 100%;
  padding-top: 32px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Date = styled.Text`
${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_1};
    margin-bottom: 8px;
  `}
`;

export const ListContainer = styled.View`
  padding: 32px 0;
  flex: 1;
`;
