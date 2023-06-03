import AsyncStorage from '@react-native-async-storage/async-storage';
import { DATE_COLLECTION } from 'storage/storageKeys';

export async function dateGetAll() {
  try {
    const storedDates = await AsyncStorage.getItem(DATE_COLLECTION);
    const dates: string[] = storedDates ? JSON.parse(storedDates) : [];

    return dates;
  } catch (error) {
    throw error;
  }
}