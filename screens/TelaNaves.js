import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function TelaNaves({ route }) {
  const { navesUrl } = route.params;
  const [naves, setNaves] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregarNaves = async () => {
      try {
        const promessas = navesUrl.map(url => axios.get(url));
        const respostas = await Promise.all(promessas);
        setNaves(respostas.map(resposta => resposta.data));
      } catch (erro) {
        console.error(erro);
      } finally {
        setCarregando(false);
      }
    };

    carregarNaves();
  }, [navesUrl]);

  if (carregando) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Naves</Text>
      <FlatList
        data={naves}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.info}>Nome: {item.name}</Text>
            <Text style={styles.info}>Modelo: {item.model}</Text>
            <Text style={styles.info}>Número de Passageiros: {item.passengers}</Text>
          </View>
        )}
        keyExtractor={(item) => item.name}
      />
      {naves.length === 0 && <Text>Não há naves disponíveis.</Text>}
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
  card: {
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  info: {
    fontSize: 16,
  },
});
