import AsyncStorage from "@react-native-async-storage/async-storage";
import { DATE_COLLECTION } from "storage/storageKeys";
import { dateGetAll } from "./dateGetAll";

export async function dateCreate(date: string) {
  try {
    const storedDates = await dateGetAll();
    const dateAlreadyExists = storedDates.includes(date);

    if (dateAlreadyExists) {
      return;
    }

    const dates = [...storedDates, date];
    await AsyncStorage.setItem(DATE_COLLECTION, JSON.stringify(dates));
  } catch (error) {
    throw error;
  }
}