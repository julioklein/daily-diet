import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';
import { CheckboxStyleProps } from './styles';

type CheckboxProps = {
  text: string;
} & TouchableOpacityProps & CheckboxStyleProps;

export const Checkbox = ({
  text = '',
  checked = false,
  variant = 'positive',
  ...rest
}: CheckboxProps) => {
  return (
    <S.Container {...rest} checked={checked} variant={variant} activeOpacity={0.8}>
      <S.Badge variant={variant} />
      <S.Text>{text}</S.Text>
    </S.Container>
  );
}