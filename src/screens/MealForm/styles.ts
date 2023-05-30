import styled, {css} from "styled-components/native";

export type MealFormStyleProps ={ 
  status?: 'positive' | 'negative' | 'neutral';
}

export const Container = styled.SafeAreaView<MealFormStyleProps>`
  flex: 1;
  background-color: ${({theme, status}) => 
    status === 'positive' ? theme.COLORS.GREEN_LIGHT :
    status === 'negative' ? theme.COLORS.RED_LIGHT :
    theme.COLORS.GRAY_5
  };
`;

export const Header = styled.View`
  height: 104px;
  width: 100%;
  align-items: center;
  padding-top: 16px;
  
  position: relative;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_1};
  `}
`;

export const BackButton = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  position: absolute;
  left: 24px;
  top: 16px;
`;

export const FormSafeArea = styled.SafeAreaView`
  background-color: ${({theme}) => theme.COLORS.GRAY_7};
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.COLORS.GRAY_7};
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;

  padding: 40px 24px;
`;

export const Form = styled.View`
  row-gap: 24px;
  margin-bottom: auto;
`;

export const FormGroup = styled.View`
  flex-direction: row;
  width: 100%;
  column-gap: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const CheckboxGroup = styled.View``;