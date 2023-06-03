import { useTheme } from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ArrowLeft, PencilSimpleLine, Trash } from 'phosphor-react-native';

import { Badge } from 'components/Badge';
import { Button } from 'components/Button';
import { DeleteMealModal } from 'components/DeleteMealModal';

import { MealParams } from 'src/routes/app.routes';
import * as S from './styles';
import { useState } from 'react';
import { mealDelete } from 'storage/meal/mealDelete';

export const Meal = () => {
  const [visible, setVisible] = useState(false);

  const { params } = useRoute<MealParams>();
  const navigation = useNavigation();

  const { meal } = params;

  const theme = useTheme();
  const iconColor = theme.COLORS.GRAY_2;

  const handleGoBack = () => {
    navigation.navigate('Home');
  }

  const handleEditMeal = () => {
    navigation.navigate('MealForm', { meal });
  }

  const handleDeleteMeal = () => {
    setVisible(true);
  }

  const deleteMeal = async () => {
    await mealDelete(meal);
    navigation.navigate('Home');
  }

  const onRequestClose = () => {
    setVisible(false);
  }

  return (
    <>
      <S.Container healthy={!!meal.healthy}>
        <DeleteMealModal
          visible={visible}
          onDeleteMeal={deleteMeal}
          onRequestClose={onRequestClose}
        />

        <S.Header>
          <S.BackButton onPress={handleGoBack}>
            <ArrowLeft size={24} color={iconColor} />
          </S.BackButton>

          <S.Title>Refeição</S.Title>
        </S.Header>

        <S.Content>
          <S.Meal>{meal.name}</S.Meal>
          <S.Description>
            {meal.description}
          </S.Description>

          <S.DateAndTimeLabel>Data e hora</S.DateAndTimeLabel>
          <S.DateAndTime>{`${meal.date} às ${meal.time}`}</S.DateAndTime>

          <Badge healthy={!!meal.healthy} />

          <S.ButtonContainer>
            <Button
              onPress={handleEditMeal}
              text='Editar refeição'
              icon={() => (
                <PencilSimpleLine size={18} color={theme.COLORS.WHITE} />
              )}
            />

            <Button
              onPress={handleDeleteMeal}
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