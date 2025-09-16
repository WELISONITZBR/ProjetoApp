import { StyleSheet, Text } from 'react-native';

export default function Counter({ value, limit }) {
  return (
    <Text
      style={[
        styles.counter,
        limit !== null && value >= limit ? styles.alert : null,
      ]}
    >
      {value}
    </Text>
  );
}

const styles = StyleSheet.create({
  counter: {
    fontSize: 60,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#333',
  },
  alert: {
    color: '#e63946', // vermelho mais bonito
  },
});


