import { TextInput, TextInputProps } from 'react-native';
import { forwardRef } from 'react';
import * as S from './styles';

type InputProps = {
  label: string;
} & TextInputProps;

export const Input = forwardRef<TextInput, InputProps>((
  { label, ...rest }: InputProps, ref
) => {
  return (
    <S.Container >
      <S.Label>{label}</S.Label>
      <S.TextInput {...rest} ref={ref} />
    </S.Container>
  );
})
