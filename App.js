import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from './screens/LoginScreen';
import { ContactanosScreen } from './screens/ContactanosScreen';

import { UsersProvider } from './context/userContext';
import { RegistroReservaScreen } from './screens/RegistroReservaScreen';
import { InicioScreen } from './screens/InicioScreen';


const Stack = createStackNavigator();



export default function App() {
  
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={InicioScreen}/>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="RegistroReserva" component={RegistroReservaScreen}/>
          <Stack.Screen name="Contactanos" component={ContactanosScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
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
