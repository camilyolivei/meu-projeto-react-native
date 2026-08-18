import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  Pressable,
} from 'react-native';

import {
  SafeAreaView,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.backGroundTelaInteira}> 

        <ImageBackground
          source={{
            uri: 'https://www.petlove.com.br/images/breeds/227696/profile/original/perfil-coelho.jpg?1597789099', width: '100%', height: '100%'
          }}
          style={styles.backGroundTelaInteira}  
        >
          <Text>Nome:</Text>
          <TextInput />

          <Text>Senha:</Text>
          <TextInput />

          <Pressable>
            <Text>Enviar</Text>
          </Pressable>

        </ImageBackground>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  backGroundTelaInteira: {
    flex: 1,
  },
});