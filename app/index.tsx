import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';

import Button from '../components/Button';
import Counter from '../components/Counter';
import Input from '../components/Input';
import Title from '../components/Title';

export default function index() {
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState<number | null>(null); // tipagem correta para aceitar número ou null
  const [input, setInput] = useState('');

  // Carregar limite salvo
  useEffect(() => {
    async function loadLimit() {
      const saved = await AsyncStorage.getItem('limit');
      if (saved) setLimit(Number(saved));
    }
    loadLimit();
  }, []);

  // Salvar limite
  async function saveLimit() {
    if (!input) return;
    const num = Number(input);
    if (isNaN(num) || num <= 0) {
      Alert.alert('Erro', 'Digite um número válido.');
      return;
    }
    setLimit(num);
    await AsyncStorage.setItem('limit', String(num));
    setInput('');
  }

  return (
    <View style={styles.container}>
      <Title>Contador de Pessoas</Title>

      <Counter value={count} limit={limit} />

      <View style={styles.row}>
        <Button onPress={() => setCount(count - 1)}>-</Button>
        <Button onPress={() => setCount(count + 1)}>+</Button>
      </View>

      <View style={styles.limitBox}>
        <Text>Definir limite máximo:</Text>
        <Input
          value={input}
          onChangeText={setInput}
          placeholder="Digite o limite"
        />
        <Button onPress={saveLimit}>Salvar</Button>
        {limit !== null && <Text>Limite atual: {limit}</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f4f8', // fundo claro
  },
  row: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  limitBox: {
    marginTop: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    elevation: 3, // sombra no Android
    shadowColor: '#000', // sombra no iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
});


