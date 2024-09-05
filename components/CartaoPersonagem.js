import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CartaoPersonagem = ({ personagem, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.nome}>{personagem.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CartaoPersonagem;
