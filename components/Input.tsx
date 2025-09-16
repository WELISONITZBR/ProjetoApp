import { StyleSheet, TextInput } from 'react-native';

export default function Input({ value, onChangeText, placeholder }) {
  return (
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType="numeric"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
    width: 220,
    textAlign: 'center',
    backgroundColor: '#fff',
    fontSize: 16,
  },
});

