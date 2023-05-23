import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';
import { ButtonStyleProps } from './styles';

type ButtonProps = {
  icon?: () => React.ReactElement;
  text: string;
} & TouchableOpacityProps & ButtonStyleProps;

export const Button = ({ icon, text, variant = 'primary', ...rest }: ButtonProps) => {
  return (
    <S.Container {...rest} variant={variant} activeOpacity={0.8}>
      {icon && icon()}
      <S.Text variant={variant}>{text}</S.Text>
    </S.Container>
  );
};