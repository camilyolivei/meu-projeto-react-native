import React, { useState } from 'react';

import {
  View,
  Text,
  FlatList,
  Modal,
  TextInput,
  Button,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

export default function App() {
  const [modalAberto, setModalAberto] = useState(false);
  const [nome, setNome] = useState('');
  const [carregando, setCarregando] = useState(false);

  const produtos = [
    { id: '1', nome: 'Cheirosa 62' },
    { id: '2', nome: 'Cheirosa 68' },
    { id: '3', nome: 'Bare Vanilla' },
    { id: '4', nome: 'Ameixa Negra' },
    { id: '5', nome: 'Ameixa e Flor de Baunilha' },
  ];

  function carregar() {
    setCarregando(true);

    setTimeout(() => {
      setCarregando(false);
      setModalAberto(false);
    }, 2000);
  }

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>
        Body Splash
      </Text>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.nome}>
              {item.nome}
            </Text>
          </View>
        )}
      />

      <View style={styles.botao}>
        <Button
          title="Adicionar Body Splash"
          onPress={() => setModalAberto(true)}
        />
      </View>

      <Modal
        visible={modalAberto}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalAberto(false)}
      >

        <View style={styles.fundoModal}>

          <View style={styles.modal}>

            <Text style={styles.tituloModal}>
              Novo Body Splash
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Digite o nome"
              value={nome}
              onChangeText={setNome}
            />

            {carregando ? (
              <ActivityIndicator size="large" />
            ) : (
              <Button
                title="Salvar"
                onPress={carregar}
              />
            )}

            <View style={styles.botaoFechar}>
              <Button
                title="Fechar"
                onPress={() => setModalAberto(false)}
              />
            </View>

          </View>

        </View>

      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },

  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  item: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
  },

  nome: {
    fontSize: 18,
  },

  botao: {
    marginBottom: 20,
  },

  fundoModal: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 30,
  },

  modal: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },

  tituloModal: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
  },

  input: {
    borderWidth: 1,
    borderColor: '#999',
    padding: 10,
    marginBottom: 15,
  },

  botaoFechar: {
    marginTop: 10,
  },

});