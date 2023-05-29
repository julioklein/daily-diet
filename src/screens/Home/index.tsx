import { Plus } from 'phosphor-react-native';
import { OverviewCard } from 'components/OverviewCard';
import { Button } from 'components/Button';
import { useTheme } from 'styled-components/native';
import { SectionList } from 'react-native';
import { MealCard } from 'components/MealCard';
import * as S from './styles';

import { dailyMeals } from './mockData';
const Logo = require('assets/logo/Logo.png');

export const Home = () => {
  const theme = useTheme();
  const iconColor = theme.COLORS.WHITE;

  let healthyMealsCount = 0;
  let unhealthyMealsCount = 0;


  dailyMeals.forEach((day) => {
    day.data.forEach((meal) => {
      if (meal.healthy) {
        healthyMealsCount += 1;
      } else {
        unhealthyMealsCount += 1;
      }
    })
  });

  const total = healthyMealsCount + unhealthyMealsCount;
  const percentage = (healthyMealsCount / total) * 100;

  console.log(percentage);

  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.Logo source={Logo} />
          <S.Avatar source={{
            uri: 'https://github.com/julioklein.png'
          }} />
        </S.Header>

        <S.OverViewArea>
          <OverviewCard percentage={percentage} status={percentage >= 50.0 ? 'positive' : 'negative'} />
        </S.OverViewArea>

        <S.NewMealSection>
          <S.Text>Refeições</S.Text>
          <Button
            text='Nova refeição'
            icon={() => <Plus size={18} color={iconColor} />}
          />
        </S.NewMealSection>

        <S.ListContainer>
          <SectionList
            sections={dailyMeals}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderSectionHeader={({ section: { title } }) => (
              <S.DateWrapper>
                <S.Date>{title.replaceAll('/', '.')}</S.Date>
              </S.DateWrapper>
            )}
            renderItem={({ item }) => (
              <MealCard
                meal={item.title}
                time={item.time}
                healthy={item.healthy}
              />
            )}
          />
        </S.ListContainer>
      </S.Content>
    </S.Container>
  );
};