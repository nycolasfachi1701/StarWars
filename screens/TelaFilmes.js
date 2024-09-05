import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function TelaFilmes({ route }) {
  const { filmesUrl } = route.params;
  const [filmes, setFilmes] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const carregarFilmes = async () => {
      try {
        const promessas = filmesUrl.map(url => axios.get(url));
        const respostas = await Promise.all(promessas);
        setFilmes(respostas.map(resposta => resposta.data));
      } catch (erro) {
        console.error(erro);
      } finally {
        setCarregando(false);
      }
    };

    carregarFilmes();
  }, [filmesUrl]);

  if (carregando) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Filmes</Text>
      <FlatList
        data={filmes}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.info}>Título: {item.title}</Text>
            <Text style={styles.info}>Diretor: {item.director}</Text>
            <Text style={styles.info}>Data de Lançamento: {item.release_date}</Text>
          </View>
        )}
        keyExtractor={(item) => item.title}
      />
      {filmes.length === 0 && <Text>Não há filmes disponíveis.</Text>}
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
