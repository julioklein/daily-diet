import AsyncStorage from "@react-native-async-storage/async-storage";
import { dateGetAll } from "./dateGetAll";
import { DATE_COLLECTION } from "storage/storageKeys";

export async function dateDelete(date: string) {
  const dates = await dateGetAll();
  const datesUpdated = dates.filter(storedDate => storedDate !== date);

  await AsyncStorage.setItem(DATE_COLLECTION, JSON.stringify(datesUpdated));
}