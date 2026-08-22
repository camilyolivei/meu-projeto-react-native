import {
  KeyboardAvoidingView,
  Platform,
  SectionList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function App() {
  const categorias = [
    {
      title: 'Entradas',
      data: ['Salada', 'Sopa'],
    },
    {
      title: 'Pratos Principais',
      data: ['Frango', 'Peixe', 'Massa'],
    },
    {
      title: 'Sobremesas',
      data: ['Bolo', 'Sorvete', 'Pudim'],
    },
  ];

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.titulo}>Catálogo</Text>

      <TextInput
        style={styles.input}
        placeholder="Pesquisar"
      />

      <SectionList
        sections={categorias}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item}</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.cabecalho}>
            {section.title}
          </Text>
        )}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },

  cabecalho: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 5,
  },

  item: {
    padding: 10,
    marginBottom: 5,
  },
});