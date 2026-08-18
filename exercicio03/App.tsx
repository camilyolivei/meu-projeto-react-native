import { useState } from 'react';

import {
  StyleSheet,
  Text,
  ScrollView,
  Switch,
  View,
} from 'react-native';

import { Card } from 'react-native-paper';

import {
  SafeAreaView,
  SafeAreaProvider,
} from 'react-native-safe-area-context';

export default function App() {

  const [resposta1, setResposta1] = useState(false);
  const [resposta2, setResposta2] = useState(false);
  const [resposta3, setResposta3] = useState(false);
  const [resposta4, setResposta4] = useState(false);
  const [resposta5, setResposta5] = useState(false);
  const [resposta6, setResposta6] = useState(false);
  const [resposta7, setResposta7] = useState(false);

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ScrollView>
          
          <Text>
            Lista de Tarefas do dia
          </Text>

          <Card>
            <Card.Title title="Rotina da manhã" />

            <Card.Content>
              <View style={styles.mesmaLinha}>
                <Text>Arrumar a cama</Text>

                <Switch
                  value={resposta1}
                  onValueChange={setResposta1}
                />
              </View>
            </Card.Content>
          </Card>


          <Card>
            <Card.Title title="Cuidados pessoais" />

            <Card.Content>
              <View style={styles.mesmaLinha}>
                <Text>Fazer skincare</Text>

                <Switch
                  value={resposta2}
                  onValueChange={setResposta2}
                />
              </View>
            </Card.Content>
          </Card>


          <Card>
            <Card.Title title="Organização" />

            <Card.Content>
              <View style={styles.mesmaLinha}>
                <Text>Organizar o quarto</Text>

                <Switch
                  value={resposta3}
                  onValueChange={setResposta3}
                />
              </View>
            </Card.Content>
          </Card>


          <Card>
            <Card.Title title="Estudos" />

            <Card.Content>
              <View style={styles.mesmaLinha}>
                <Text>Estudar</Text>

                <Switch
                  value={resposta4}
                  onValueChange={setResposta4}
                />
              </View>
            </Card.Content>
          </Card>


          <Card>
            <Card.Title title="Exercícios" />

            <Card.Content>
              <View style={styles.mesmaLinha}>
                <Text>Fazer atividade física</Text>

                <Switch
                  value={resposta5}
                  onValueChange={setResposta5}
                />
              </View>
            </Card.Content>
          </Card>


          <Card>
            <Card.Title title="Autocuidado" />

            <Card.Content>
              <View style={styles.mesmaLinha}>
                <Text>Ter um momento para mim</Text>

                <Switch
                  value={resposta6}
                  onValueChange={setResposta6}
                />
              </View>
            </Card.Content>
          </Card>


          <Card>
            <Card.Title title="Rotina da noite" />

            <Card.Content>
              <View style={styles.mesmaLinha}>
                <Text>Preparar as coisas para amanhã</Text>

                <Switch
                  value={resposta7}
                  onValueChange={setResposta7}
                />
              </View>
            </Card.Content>
          </Card>

        </ScrollView>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  mesmaLinha: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});