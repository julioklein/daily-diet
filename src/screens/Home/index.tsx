import { useCallback, useState } from 'react';
import { SectionList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { Plus } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';

import { OverviewCard } from 'components/OverviewCard';
import { Button } from 'components/Button';
import { MealCard } from 'components/MealCard';

import { mealGetAll } from 'storage/meal/mealGetAll';
import { dateGetAll } from 'storage/date/dateGetAll';
import { MealDTO } from 'storage/meal/MealDTO';
import * as S from './styles';


const Logo = require('assets/logo/Logo.png');

export const Home = () => {
  const [meals, setMeals] = useState<{
    date: string;
    data: MealDTO[];
  }[]>([]);

  const navigation = useNavigation();
  const theme = useTheme();
  const iconColor = theme.COLORS.WHITE;

  let healthyMealsCount = 0;
  let unhealthyMealsCount = 0;
  let streakOfDays: number[] = [0];

  meals.forEach((day) => {
    day.data.forEach((meal) => {
      if (meal.healthy) {
        healthyMealsCount += 1;
        streakOfDays[streakOfDays.length - 1] += 1;
      } else {
        unhealthyMealsCount += 1;
        streakOfDays.push(0);
      }
    })
  });

  const total = healthyMealsCount + unhealthyMealsCount;
  const percentage = healthyMealsCount > 0 && total > 0 ?
    (healthyMealsCount / total) * 100
    : 0;

  const getMealsByDate = async () => {
    const dates = await dateGetAll();
    const meals = await mealGetAll();

    const mealsByDate = dates.map((date) => ({
      date,
      data: meals.filter((meal) => meal.date === date)
    }));

    setMeals(mealsByDate.filter((meal) => meal.data.length > 0));
  }

  const handleCreateMeal = () => {
    navigation.navigate('MealForm', { meal: undefined });
  }

  const handleNavigateToMeal = (meal: MealDTO) => {
    navigation.navigate('Meal', { meal });
  }

  const handleNavigateToOverview = () => {
    navigation.navigate('Overview', {
      status: percentage >= 50.0 ? 'positive' : 'negative',
      streakOfDays: Math.max(...streakOfDays),
      totalOfMeals: total,
      totalOfHealthyMeals: healthyMealsCount,
      totalOfUnhealthyMeals: unhealthyMealsCount,
      percentage,
    });
  }

  useFocusEffect(useCallback(() => {
    getMealsByDate();
  }, []));

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
          <OverviewCard
            onPress={handleNavigateToOverview}
            percentage={percentage}
            status={percentage >= 50.0 ? 'positive' : 'negative'} />
        </S.OverViewArea>

        <S.NewMealSection>
          <S.Text>Refeições</S.Text>
          <Button
            text='Nova refeição'
            icon={() => <Plus size={18} color={iconColor} />}
            onPress={handleCreateMeal}
          />
        </S.NewMealSection>

        <S.ListContainer>
          <SectionList
            sections={meals}
            keyExtractor={(item) => item.id!}
            showsVerticalScrollIndicator={false}
            renderSectionHeader={({ section: { date } }) => (
              <S.DateWrapper>
                {date && <S.Date>{date.replaceAll('/', '.')}</S.Date>}
              </S.DateWrapper>
            )}
            renderItem={({ item: meal }) => (
              <MealCard
                onPress={() => handleNavigateToMeal(meal)}
                meal={meal}
              />
            )}
          />
        </S.ListContainer>
      </S.Content>
    </S.Container>
  );
};