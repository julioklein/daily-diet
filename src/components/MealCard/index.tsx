import { TouchableOpacityProps } from 'react-native';
import { MealCardStyleProps } from './styles';
import { MealDTO } from 'storage/meal/MealDTO';
import * as S from './styles';

type MealCardProps = {
  meal: MealDTO;
} & TouchableOpacityProps & MealCardStyleProps;

export const MealCard = ({ meal, ...rest }: MealCardProps) => {

  return (
    <S.Container {...rest} activeOpacity={0.9}>
      <S.Time>{meal.time}</S.Time>
      <S.Line />

      <S.Meal>{meal.name}</S.Meal>
      <S.Badge healthy={meal.healthy} />
    </S.Container>
  );
};