import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text } from 'react-native';
import axios from 'axios';
import CartaoPersonagem from '../components/CartaoPersonagem';

export default function TelaPersonagens({ navigation }) {
  const [personagens, setPersonagens] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregarPersonagens = async () => {
      try {
        const resposta = await axios.get('https://swapi.dev/api/people/');
        setPersonagens(resposta.data.results.slice(0, 5)); // Limitando a 5 personagens
      } catch (erro) {
        console.error(erro);
      } finally {
        setCarregando(false);
      }
    };

    carregarPersonagens();
  }, []);

  if (carregando) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Personagens</Text>
      <FlatList
        data={personagens}
        renderItem={({ item }) => (
          <CartaoPersonagem
            personagem={item}
            onPress={() => navigation.navigate('DetalhesPersonagem', { personagem: item })}
          />
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
    marginHorizontal: 15,
  },
});
