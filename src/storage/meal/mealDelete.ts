import AsyncStorage from "@react-native-async-storage/async-storage";
import { mealGetAll } from "./mealGetAll";
import { MealDTO } from "./MealDTO";
import { MEAL_COLLECTION } from "storage/storageKeys";


export async function mealDelete(meal: MealDTO) {
  const storedMeals = await mealGetAll();
  const mealsUpdated = storedMeals.filter(storedMeal => storedMeal.id !== meal.id);

  await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(mealsUpdated));
}