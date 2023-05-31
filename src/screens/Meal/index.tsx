import { useTheme } from 'styled-components/native';
import { ArrowLeft, PencilSimpleLine, Trash } from 'phosphor-react-native';
import { MealStyleProps } from './styles';
import { Badge } from 'components/Badge';
import { Button } from 'components/Button';
import * as S from './styles';

type MealProps = {
} & MealStyleProps;

export const Meal = ({ status = 'negative' }: MealProps) => {
  const theme = useTheme();
  const iconColor = theme.COLORS.GRAY_2;

  return (
    <>
      <S.Container status={status}>
        <S.Header>
          <S.BackButton>
            <ArrowLeft size={24} color={iconColor} />
          </S.BackButton>

          <S.Title>Refeição</S.Title>
        </S.Header>

        <S.Content>
          <S.Meal>Sanduíche</S.Meal>
          <S.Description>
            Sanduíche de pão integral com atum e salada de alface e tomate
          </S.Description>

          <S.DateAndTimeLabel>Data e hora</S.DateAndTimeLabel>
          <S.DateAndTime>12/08/2022 às 16:00</S.DateAndTime>

          <Badge status={status} />

          <S.ButtonContainer>
            <Button
              text='Editar refeição'
              icon={() => (
                <PencilSimpleLine size={18} color={theme.COLORS.WHITE} />
              )}
            />

            <Button
              text='Excluir refeição'
              icon={() => (
                <Trash size={18} color={theme.COLORS.GRAY_1} />
              )}
              variant='secondary'
            />
          </S.ButtonContainer>
        </S.Content>
      </S.Container>
      <S.ContentSafeArea />
    </>
  )
}