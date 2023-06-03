import AsyncStorage from '@react-native-async-storage/async-storage';
import { MEAL_COLLECTION } from 'storage/storageKeys';
import { MealDTO } from './MealDTO';

export async function mealGetAll() {
  try {
    const storedMeals = await AsyncStorage.getItem(MEAL_COLLECTION);
    const meals: MealDTO[] = storedMeals ? JSON.parse(storedMeals) : [];

    return meals;
  } catch (error) {
    throw error;
  }
}
