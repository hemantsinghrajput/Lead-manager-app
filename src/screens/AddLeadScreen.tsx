import { View, TextInput, Button } from "react-native";
import { useState } from "react";
import { saveLead } from "../storage/leadStorage";

export default function AddLeadScreen({ navigation }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const submitLead = async () => {
    await saveLead({
      id: Date.now().toString(),
      name,
      email,
      phone,
      service,
    });

    navigation.navigate("Leads");
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Name" value={name} onChangeText={setName} />
      <TextInput placeholder="Email" value={email} onChangeText={setEmail} />
      <TextInput placeholder="Phone" value={phone} onChangeText={setPhone} />
      <TextInput placeholder="Service" value={service} onChangeText={setService} />
      <Button title="Save Lead" onPress={submitLead} />
    </View>
  );
}
