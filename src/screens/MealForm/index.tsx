import { useState } from 'react';
import { ArrowLeft } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { MealFormStyleProps } from './styles';
import { Input } from 'components/Input';
import { Checkbox } from 'components/Checkbox';
import { Label } from 'components/Input/styles';
import { Button } from 'components/Button';
import * as S from './styles';

type MealFormProps = {

} & MealFormStyleProps;

type Meal = {
  name: string;
  description: string;
  date: string;
  time: string;
  healthy: boolean;
}

export const MealForm = ({ status = 'neutral' }: MealFormProps) => {
  const [meal, setMeal] = useState<Meal>({} as Meal);
  const theme = useTheme();
  const iconColor = theme.COLORS.GRAY_2;

  const handleCheckbox = (value: boolean) => {
    setMeal({ ...meal, healthy: value });
  }

  const handleSaveMeal = () => {
    console.log(meal);
  }

  return (
    <>
      <S.Container status={status}>
        <S.Header>
          <S.BackButton>
            <ArrowLeft size={24} color={iconColor} />
          </S.BackButton>

          <S.Title>Nova refeição</S.Title>
        </S.Header>

        <S.Content>
          <S.Form>
            <Input
              label='Nome'
              value={meal.name}
              onChangeText={text => setMeal({ ...meal, name: text })}
            />

            <Input
              value={meal.description}
              onChangeText={text => setMeal({ ...meal, description: text })}
              label='Descrição'
              multiline
              numberOfLines={4}
            />

            <S.FormGroup>
              <Input
                value={meal.date}
                onChangeText={text => setMeal({ ...meal, date: text })}
                label='Data'
              />

              <Input
                value={meal.time}
                onChangeText={text => setMeal({ ...meal, time: text })}
                label='Hora'
              />
            </S.FormGroup>

            <S.CheckboxGroup>
              <Label>Está dentro da dieta?</Label>
              <S.FormGroup>
                <Checkbox
                  checked={meal.healthy}
                  onPress={() => handleCheckbox(true)}
                  text='Sim'
                />
                <Checkbox
                  checked={!meal.healthy}
                  onPress={() => handleCheckbox(false)}
                  text='Não'
                  variant='negative'
                />
              </S.FormGroup>
            </S.CheckboxGroup>
          </S.Form>

          <Button
            onPress={handleSaveMeal}
            text='Cadastrar refeição' />
        </S.Content>
      </S.Container>
      <S.FormSafeArea />
    </>
  );
}