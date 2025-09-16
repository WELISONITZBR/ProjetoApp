import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function Button({ children, onPress }) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4e73df', // azul elegante
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginHorizontal: 8,
    borderRadius: 30, // mais arredondado
    minWidth: 70,
    alignItems: 'center',
    elevation: 3, // sombra Android
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

