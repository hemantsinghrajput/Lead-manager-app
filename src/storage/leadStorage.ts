import AsyncStorage from "@react-native-async-storage/async-storage";
import { Lead } from "../types/Lead";

const STORAGE_KEY = "LEADS";

export const saveLead = async (lead: Lead) => {
  const existing = await AsyncStorage.getItem(STORAGE_KEY);
  const leads: Lead[] = existing ? JSON.parse(existing) : [];
  leads.push(lead);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
};

export const getLeads = async (): Promise<Lead[]> => {
  const existing = await AsyncStorage.getItem(STORAGE_KEY);
  return existing ? JSON.parse(existing) : [];
};
