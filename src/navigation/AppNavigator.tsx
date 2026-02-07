import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen";
import AddLeadScreen from "../screens/AddLeadScreen";
import LeadsListScreen from "../screens/LeadsListScreen";

export type RootStackParamList = {
  Login: undefined;
  AddLead: undefined;
  Leads: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="AddLead" component={AddLeadScreen} />
      <Stack.Screen name="Leads" component={LeadsListScreen} />
    </Stack.Navigator>
  );
}
