import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/FontAwesome';



import { ListaTareasScreen } from './ListaTareasScreen';
import { CreateTareaScreen } from './CreateTareaScreen';
import { TareaImpScreen } from './TareaImpScreen';
import { NotificationsScreen } from './NotificationsScreen';
import { TareaVScreen } from './TareaVScreen';
import { TareaDetailScreen } from './TareaDetailScreen';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ navigation }) => {
  const renderDrawerItem = (label, iconName, screenName) => {
    return (
      <DrawerItem
        label={() => (
          <View style={styles.drawerItemContainer}>
            <Icon name={iconName} size={20} style={styles.drawerItemIcon} />
            <Text style={styles.drawerItemLabel}>{label}</Text>
          </View>
        )}
        onPress={() => navigation.navigate(screenName)}
        style={styles.drawerItem}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Icon name="user-circle" size={80} style={styles.profileIcon} />
        <Text style={styles.profileName}>John Doe</Text>
      </View>

      <DrawerContentScrollView>
        {renderDrawerItem('Inicio', 'home', 'Inicio')}
        {renderDrawerItem('Ubicación', 'map-marker', 'Ubicación')}
        {renderDrawerItem('Pedido', 'plus-circle', 'Pedido')}
        {renderDrawerItem('Reservas', 'calendar-plus-o', 'Reservas')}
        {renderDrawerItem('Menú', 'star', 'Menú')}
        {renderDrawerItem('Contáctanos', 'phone', 'Contáctanos')}
      </DrawerContentScrollView>
    </View>
  );
};

export const MenuScreen = ({ navigation }) => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        initialRouteName="Inicio"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Inicio" component={ListaTareasScreen} />
        <Drawer.Screen name="Ubicación" component={NotificationsScreen} />
        <Drawer.Screen name="Pedido" component={CreateTareaScreen} />
        <Drawer.Screen name="Reservas" component={TareaVScreen} />
        <Drawer.Screen name="Menú" component={TareaImpScreen} />
        <Drawer.Screen name="Contáctanos" component={TareaDetailScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  profileContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  profileIcon: {
    color: 'white',
    marginBottom: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  drawerItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
  drawerItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  drawerItemIcon: {
    marginRight: 10,
    color: 'white',
  },
  drawerItemLabel: {
    fontSize: 16,
    color: 'white',
  },
});
