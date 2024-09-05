import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaPersonagens from './screens/TelaPersonagens';
import TelaDetalhesPersonagem from './screens/TelaDetalhesPersonagem';
import TelaNaves from './screens/TelaNaves';
import TelaFilmes from './screens/TelaFilmes';
import TelaSobre from './screens/TelaSobre';
import { Ionicons } from 'react-native-vector-icons';
import { Button } from 'react-native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Personagens">
        <Stack.Screen
          name="Personagens"
          component={TelaPersonagens}
          options={({ navigation }) => ({
            title: 'Personagens',
            headerRight: () => (
              <Button
                onPress={() => navigation.navigate('Sobre')}
                title="Sobre"
                color="#000"
              />
            ),
            headerRightContainerStyle: { marginRight: 15 },
          })}
        />
        <Stack.Screen name="DetalhesPersonagem" component={TelaDetalhesPersonagem} />
        <Stack.Screen name="Naves" component={TelaNaves} />
        <Stack.Screen name="Filmes" component={TelaFilmes} />
        <Stack.Screen
          name="Sobre"
          component={TelaSobre}
          options={{
            title: 'Sobre',
            headerRight: () => (
              <Ionicons name="information-circle-outline" size={24} color="black" style={{ marginRight: 15 }} />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
