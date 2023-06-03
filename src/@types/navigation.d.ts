import { MealDTO } from "storage/meal/MealDTO";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Meal: { meal: MealDTO };
      MealForm: { meal?: MealDTO; };
      MealSaved: { healthy: boolean; };
      Overview: {
        status: 'positive' | 'negative';
        streakOfDays?: number;
        totalOfMeals?: number;
        totalOfHealthyMeals?: number;
        totalOfUnhealthyMeals?: number;
        percentage: number;
      };
    }
  }
}