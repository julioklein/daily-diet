import { TouchableOpacityProps } from 'react-native';
import { OverviewCardStyleProps } from './styles';
import * as S from './styles';

type OverviewCardProps = {
  percentage?: number;
} & TouchableOpacityProps & OverviewCardStyleProps;

export const OverviewCard = ({ percentage = 0, status = 'positive', ...rest }: OverviewCardProps) => {
  return (
    <S.Container {...rest} status={status} activeOpacity={0.8}>
      <S.NavigtionButton>
        <S.Icon status={status} />
      </S.NavigtionButton>

      <S.Percentage>{percentage.toFixed(2).toString().replace('.', ',')}%</S.Percentage>
      <S.Text>das refeições dentro da dieta</S.Text>
    </S.Container>
  )
}