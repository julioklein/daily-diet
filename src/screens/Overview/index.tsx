import { ArrowLeft } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { StatsCard } from 'components/StatsCard';

import { OverviewParams } from 'src/routes/app.routes';
import * as S from './styles';

export const Overview = () => {
  const theme = useTheme();
  const navigation = useNavigation();
  const { params } = useRoute<OverviewParams>();
  const iconColor = params.status === 'positive' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK;

  const handleGoBack = () => {
    navigation.navigate('Home');
  }

  return (
    <S.Container status={params?.status}>
      <S.Header>
        <S.BackButton onPress={handleGoBack}>
          <ArrowLeft size={24} color={iconColor} />
        </S.BackButton>

        <S.Title>
          {(params?.percentage || 0).toFixed(2).toString().replace('.', ',')}%
        </S.Title>
        <S.Subtitle>das refeições dentro da dieta</S.Subtitle>
      </S.Header>

      <S.StatsContainer>
        <S.StatsText>Estatísticas gerais</S.StatsText>

        <StatsCard
          total={params?.streakOfDays || 0}
          text='melhor sequência de pratos dentro da dieta'
        />

        <StatsCard
          total={params?.totalOfMeals || 0}
          text='refeições registradas'
        />

        <S.StatsGroup>
          <StatsCard
            total={params?.totalOfHealthyMeals || 0}
            text='refeições dentro da dieta'
            status='positive'
          />

          <StatsCard
            total={params?.totalOfUnhealthyMeals || 0}
            text='refeições fora da dieta'
            status='negative'
          />
        </S.StatsGroup>
      </S.StatsContainer>
    </S.Container>
  );
}