import { useEffect, useRef, useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, TextInput } from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';
import { useTheme } from 'styled-components/native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Input } from 'components/Input';
import { Checkbox } from 'components/Checkbox';
import { Label } from 'components/Input/styles';
import { Button } from 'components/Button';

import { MealDTO } from 'storage/meal/MealDTO';
import { mealCreate } from 'storage/meal/mealCreate';
import { dateCreate } from 'storage/date/dateCreate';
import { MealFormParams } from 'src/routes/app.routes';
import * as S from './styles';

const INITIAL_STATE = {
  name: '',
  description: '',
  date: '',
  time: '',
  healthy: null,
};

export const MealForm = () => {
  const [meal, setMeal] = useState<MealDTO>(INITIAL_STATE);

  const navigation = useNavigation();
  const { params } = useRoute<MealFormParams>();
  const theme = useTheme();
  const iconColor = theme.COLORS.GRAY_2;

  const inputNameRef = useRef<TextInput>(null);
  const inputDescriptionRef = useRef<TextInput>(null);
  const inputTimeRef = useRef<TextInput>(null);

  const handleCheckbox = (value: boolean) => {
    setMeal({ ...meal, healthy: value });
  }

  const handleSetDate = (date: string) => {
    setMeal({ ...meal, date: date.replace(/(^\d{2})(\d{2})(\d{4}$)/gmi, '$1/$2/$3') });
  }

  const handleSetTime = (time: string) => {
    setMeal({ ...meal, time: time.replace(/(^\d{2})(\d{2}$)/gmi, '$1:$2') });
  }

  const handleSaveMeal = async () => {
    const healthy = !!meal.healthy;

    if (!meal.name || !meal.date || !meal.time) {
      return Alert.alert(
        'Erro ao adicionar refeição',
        'Por favor, Preencha todos os campos obrigatários *');
    }

    const newMeal = {
      ...meal,
      id: params?.meal ? params.meal.id : Date.now().toString(),
    };

    await dateCreate(newMeal.date);
    await mealCreate(newMeal);
    setMeal(INITIAL_STATE);


    if (params?.meal) {
      navigation.navigate('Home')
    } else {
      navigation.navigate('MealSaved', { healthy });
    }
  }

  const handleGoBack = () => {
    navigation.navigate('Home');
  }

  useEffect(() => {
    inputNameRef.current?.focus()
  }, []);

  useEffect(() => {
    if (params?.meal) {
      setMeal(params.meal);
    }
  }, [params]);

  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <S.Container>
            <S.Header>
              <S.BackButton onPress={handleGoBack}>
                <ArrowLeft size={24} color={iconColor} />
              </S.BackButton>

              <S.Title>
                {params?.meal ? 'Editar refeição' : 'Nova refeição'}
              </S.Title>
            </S.Header>

            <S.Content>
              <S.Form>
                <Input
                  label='Nome*'
                  value={meal.name}
                  onChangeText={text => setMeal({ ...meal, name: text })}
                  returnKeyType="done"
                  onSubmitEditing={() => inputDescriptionRef.current?.focus()}
                  ref={inputNameRef}
                />

                <Input
                  value={meal.description}
                  onChangeText={text => setMeal({ ...meal, description: text })}
                  label='Descrição'
                  multiline
                  numberOfLines={4}
                  ref={inputDescriptionRef}
                />

                <S.FormGroup>
                  <Input
                    value={meal.date}
                    onChangeText={handleSetDate}
                    label='Data*'
                    returnKeyType="done"
                    onSubmitEditing={() => inputTimeRef.current?.focus()}
                    keyboardType='numeric'
                    maxLength={10}
                  />

                  <Input
                    value={meal.time}
                    onChangeText={handleSetTime}
                    label='Hora*'
                    ref={inputTimeRef}
                    keyboardType='numeric'
                    maxLength={5}
                  />
                </S.FormGroup>

                <S.CheckboxGroup>
                  <Label>Está dentro da dieta?</Label>
                  <S.FormGroup>
                    <Checkbox
                      checked={meal.healthy !== null && meal.healthy}
                      onPress={() => handleCheckbox(true)}
                      text='Sim'
                    />
                    <Checkbox
                      checked={meal.healthy !== null && !meal.healthy}
                      onPress={() => handleCheckbox(false)}
                      text='Não'
                      variant='negative'
                    />
                  </S.FormGroup>
                </S.CheckboxGroup>
              </S.Form>

              <Button
                onPress={handleSaveMeal}
                text={params?.meal ? 'Salvar alterações' : 'Cadastrar refeição'} />
            </S.Content>
          </S.Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <S.FormSafeArea />
    </>
  );
}