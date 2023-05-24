import { TouchableOpacityProps } from 'react-native';
import { MealCardStyleProps } from './styles';
import * as S from './styles';

type MealCardProps = {
  meal: string;
  time: string;
} & TouchableOpacityProps & MealCardStyleProps;

export const MealCard = ({ meal, time, healthy = true, ...rest }: MealCardProps) => {

  return (
    <S.Container {...rest} activeOpacity={0.9}>
      <S.Time>{time}</S.Time>
      <S.Line />

      <S.Meal>{meal}</S.Meal>
      <S.Badge healthy={healthy} />
    </S.Container>
  );
};