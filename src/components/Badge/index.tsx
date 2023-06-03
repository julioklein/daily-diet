import * as S from './styles';
import { BadgeStyleProps } from './styles';

export const Badge = ({ healthy = true }: BadgeStyleProps) => {
  return <S.Container>
    <S.Badge healthy={healthy} />
    <S.BadgeText>
      {healthy ? ' dentro da dieta' : 'fora da dieta'}
    </S.BadgeText>
  </S.Container>
};