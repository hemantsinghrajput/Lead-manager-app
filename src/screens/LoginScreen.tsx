import { View, Text, TextInput, Button, Alert } from "react-native";
import { useState } from "react";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "admin@test.com" && password === "123456") {
      navigation.replace("AddLead");
    } else {
      Alert.alert("Invalid Credentials");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <Text>Password</Text>
      <TextInput
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ borderWidth: 1, marginBottom: 20, padding: 8 }}
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
