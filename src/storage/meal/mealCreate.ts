import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from 'storage/storageKeys';
import { MealDTO } from './MealDTO';
import { mealGetAll } from './mealGetAll';

export async function mealCreate(meal: MealDTO) {
  try {
    const storedMeals = await mealGetAll();
    const mealAlreadyExists = storedMeals.find(storedMeal => storedMeal.id === meal.id);

    if (mealAlreadyExists) {
      const prevMeals = storedMeals.filter(storedMeal => storedMeal.id !== mealAlreadyExists.id);
      const mealsUpdated = JSON.stringify([...prevMeals, meal]);
      await AsyncStorage.setItem(MEAL_COLLECTION, mealsUpdated)
      return;
    }

    const mealsUpdated = JSON.stringify([...storedMeals, meal]);
    await AsyncStorage.setItem(MEAL_COLLECTION, mealsUpdated)
  } catch (error) {
    throw error;
  }
}