import * as S from './styles';
import { BadgeStyleProps } from './styles';

export const Badge = ({ status = 'positive' }: BadgeStyleProps) => {
  return <S.Container>
    <S.Badge status={status} />
    <S.BadgeText>
      {status === 'positive' ? ' dentro da dieta' : 'fora da dieta'}
    </S.BadgeText>
  </S.Container>
};