import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image , Button} from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

      <Image source={require('./assets/perfil-coelho.webp')}/>

      <Text>
        Nome:
      </Text>

      <Text>
        Bio:
      </Text>

      <Button title="Enviar"/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
