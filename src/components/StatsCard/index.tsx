import * as S from './styles';
import { StatsCardStyleProps } from './styles';

type StatsCardProps = {
  total?: number;
  text?: string
} & StatsCardStyleProps;

export const StatsCard = ({ total = 0, text = '', status = 'neutral' }: StatsCardProps) => {
  return (
    <S.Container status={status}>
      <S.Total>{total}</S.Total>
      <S.Text numberOfLines={2}>{text}</S.Text>
    </S.Container>
  )
}