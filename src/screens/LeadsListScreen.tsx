import { View, Text, FlatList, TextInput } from "react-native";
import { useEffect, useState } from "react";
import { getLeads } from "../storage/leadStorage";
import { Lead } from "../types/Lead";

export default function LeadsListScreen() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getLeads().then(setLeads);
  }, []);

  const filtered = leads.filter(
    (l) =>
      l.name.toLowerCase().includes(search.toLowerCase()) ||
      l.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Search by name or email"
        value={search}
        onChangeText={setSearch}
        style={{ borderWidth: 1, marginBottom: 10 }}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text>{item.name}</Text>
            <Text>{item.email} | {item.phone}</Text>
            <Text>{item.service}</Text>
          </View>
        )}
      />
    </View>
  );
}
