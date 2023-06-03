import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from 'screens/Home';
import { Meal } from 'screens/Meal';
import { MealForm } from 'screens/MealForm';
import { MealSaved } from 'screens/MealSaved';
import { Overview } from 'screens/Overview';
import { MealDTO } from 'storage/meal/MealDTO';

type RootStackParamList = {
  Home: undefined;
  Meal: { meal: MealDTO };
  MealForm: { meal?: MealDTO; };
  MealSaved: { healthy: boolean; };
  Overview: {
    status: 'positive' | 'negative';
    streakOfDays: number;
    totalOfMeals: number;
    totalOfHealthyMeals: number;
    totalOfUnhealthyMeals: number;
    percentage: number;
  };
};

export type MealFormProps = NativeStackScreenProps<RootStackParamList, 'MealForm'>;
export type MealFormParams = MealFormProps['route'];

export type OverviewProps = NativeStackScreenProps<RootStackParamList, 'Overview'>;
export type OverviewParams = OverviewProps['route'];

export type MealSavedProps = NativeStackScreenProps<RootStackParamList, 'MealSaved'>;
export type MealSavedParams = MealSavedProps['route'];

export type MealProps = NativeStackScreenProps<RootStackParamList, 'Meal'>;
export type MealParams = MealProps['route'];


const { Navigator, Screen } = createNativeStackNavigator();

export const AppRoutes = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name='Home'
        component={Home}
      />
      <Screen
        name='Meal'
        component={Meal}
      />
      <Screen
        name='MealForm'
        component={MealForm}
      />
      <Screen
        name='MealSaved'
        component={MealSaved}
      />
      <Screen
        name='Overview'
        component={Overview}
      />
    </Navigator>
  )
}