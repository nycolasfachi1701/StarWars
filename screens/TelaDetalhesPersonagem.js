import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default function TelaDetalhesPersonagem({ route, navigation }) {
  const { personagem } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Detalhes do Personagem</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>Nome: {personagem.name}</Text>
        <Text style={styles.info}>Altura: {personagem.height} cm</Text>
        <Text style={styles.info}>Peso: {personagem.mass} kg</Text>
        <Text style={styles.info}>Cor do Cabelo: {personagem.hair_color}</Text>
        <Text style={styles.info}>Cor da Pele: {personagem.skin_color}</Text>
        <Text style={styles.info}>Cor dos Olhos: {personagem.eye_color}</Text>
        <Text style={styles.info}>Gênero: {personagem.gender}</Text>
      </View>
      <View style={styles.botoes}>
        <Button
          title="Naves"
          onPress={() => navigation.navigate('Naves', { navesUrl: personagem.starships })}
        />
        <Button
          title="Filmes"
          onPress={() => navigation.navigate('Filmes', { filmesUrl: personagem.films })}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  infoContainer: {
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
  botoes: {
    marginTop: 20,
  },
});
