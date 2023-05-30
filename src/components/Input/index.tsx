import { TextInputProps } from 'react-native';
import * as S from './styles';

type InputProps = {
  label: string;
} & TextInputProps;

export const Input = ({ label, ...rest }: InputProps) => {
  return (
    <S.Container >
      <S.Label>{label}</S.Label>
      <S.TextInput {...rest} />
    </S.Container>
  );
}