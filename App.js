import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, Image, TextInput } from 'react-native';

export default function App() {
  const teamMembers = [
    { name: 'Membro 1', role: 'João Levi Simas' },
    { name: 'Membro 2', role: 'Daniel Avendana' },
    { name: 'Membro 3', role: 'Angelo Souza' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Empresa XPTO</Text>
      <Image source={require('./img/fullsize_2018_11_19_17_Logo-249429_341712_173439664_140829524.jpg')} style={styles.logo} />
      <Text style={styles.label}>Cadastramento de Clientes</Text>
      <View style={styles.formContainer}>
        <TextInput style={styles.input} placeholder="Matrícula" />
        <TextInput style={styles.input} placeholder="Nome" />
        <TextInput style={styles.input} placeholder="Logradouro" />
        <TextInput style={styles.input} placeholder="Número" />
        <TextInput style={styles.input} placeholder="Bairro" />
        <TextInput style={styles.input} placeholder="CEP" />
        <TextInput style={styles.input} placeholder="Cidade" />
        <TextInput style={styles.input} placeholder="UF" />
      </View>
      <View style={styles.teamContainer}>
        <Text style={styles.teamTitle}>Equipe</Text>
        {teamMembers.map((member, index) => (
          <View key={index} style={styles.memberContainer}>
            <Text style={styles.memberName}>{member.name}</Text>
            <Text style={styles.memberRole}>{member.role}</Text>
          </View>
        ))}
      </View>
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginTop: 10,
  },
  label: {
    fontSize: 18,
    marginTop: 20,
  },
  formContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    marginBottom: 10,
  },
  teamContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 20,
  },
  teamTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  memberContainer: {
    marginBottom: 10,
  },
  memberName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  memberRole: {
    fontSize: 14,
    color: '#666',
  },
});