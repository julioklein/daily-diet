import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from 'screens/Home';
import { Meal } from 'screens/Meal';
import { MealForm } from 'screens/MealForm';
import { Overview } from 'screens/Overview';

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
        component={MealForm}
      />
      <Screen
        name='Overview'
        component={Overview}
      />
    </Navigator>
  )
}