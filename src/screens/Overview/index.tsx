import { ArrowLeft } from 'phosphor-react-native';
import { OverviewCardStyleProps } from 'components/OverviewCard/styles';
import * as S from './styles';
import { useTheme } from 'styled-components/native';
import { StatsCard } from 'components/StatsCard';

export const Overview = ({ status = 'positive' }: OverviewCardStyleProps) => {
  const theme = useTheme();
  const iconColor = status === 'positive' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK;

  return (
    <S.Container status={status}>
      <S.Header>
        <S.BackButton>
          <ArrowLeft size={24} color={iconColor} />
        </S.BackButton>

        <S.Title>90,86%</S.Title>
        <S.Subtitle>das refeições dentro da dieta</S.Subtitle>
      </S.Header>

      <S.StatsContainer>
        <S.StatsText>Estatísticas gerais</S.StatsText>

        <StatsCard
          total={22}
          text='melhor sequência de pratos dentro da dieta'
        />

        <StatsCard
          total={109}
          text='refeições registradas'
        />

        <S.StatsGroup>
          <StatsCard
            total={99}
            text='refeições dentro da dieta'
            status='positive'
          />

          <StatsCard
            total={10}
            text='refeições fora da dieta'
            status='negative'
          />
        </S.StatsGroup>
      </S.StatsContainer>
    </S.Container>
  );
}