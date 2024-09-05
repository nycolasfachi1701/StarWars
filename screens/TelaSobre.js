import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaSobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre</Text>
      <Text style={styles.info}>RA: 1134317</Text>
      <Text style={styles.info}>Nome: Nycolas Musskopf Fachi</Text>
      <Text style={styles.info}>E-mail: 1134317@atitus.edu.br</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});
