import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import * as SplashScreen from 'expo-splash-screen';

import { Home } from 'screens/Home';
import theme from './src/theme';
import { Overview } from 'screens/Overview';
import { MealForm } from 'screens/MealForm';
import { MealSaved } from 'screens/MealSaved';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Nunito-Regular': require('./assets/fonts/NunitoSans-Regular.ttf'),
    'Nunito-Bold': require('./assets/fonts/NunitoSans-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={styles.container}>
      <ThemeProvider theme={theme}>
        <StatusBar style="auto" />
        {/* <Home /> */}
        {/* <Overview /> */}
        {/* <MealForm /> */}
        <MealSaved />
      </ThemeProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent'
  },
});
