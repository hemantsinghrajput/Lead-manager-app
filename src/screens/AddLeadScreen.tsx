import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { useState } from "react";
import { saveLead } from "../storage/leadStorage";

export default function AddLeadScreen({ navigation }: any) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const submitLead = async () => {
    if (!name || !email || !phone || !service) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    if (!email.includes('@')) {
      Alert.alert("Error", "Please enter a valid email address");
      return;
    }

    try {
      await saveLead({
        id: Date.now().toString(),
        name,
        email,
        phone,
        service,
      });

      Alert.alert("Success", "Lead saved successfully!", [
        { text: "OK", onPress: () => navigation.navigate("Leads") }
      ]);
    } catch (error) {
      Alert.alert("Error", "Failed to save lead. Please try again.");
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          <Text style={styles.title}>Add New Lead</Text>
          
          <Text style={styles.label}>Name *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter customer name"
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
          />
          
          <Text style={styles.label}>Email *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter email address"
          placeholderTextColor="#999"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <Text style={styles.label}>Phone *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter phone number"
          placeholderTextColor="#999"
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
          />
          
          <Text style={styles.label}>Service *</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter service type"
          placeholderTextColor="#999"
            value={service}
            onChangeText={setService}
            blurOnSubmit={false}
          />
          
          <View style={styles.buttonContainer}>
            <Button 
              title="View Leads" 
              onPress={() => navigation.navigate("Leads")}
              color="#666"
            />
            <Button 
              title="Save Lead" 
              onPress={submitLead}
              color="#007AFF"
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 100,
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginTop: 10,
  },
});
