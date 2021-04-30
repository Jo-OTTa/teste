import React from 'react';
import { StyleSheet, View,} from 'react-native';
import { Menu  } from 'react-native-paper';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import AddUsuario from './components/usuarios/addUsuario';
import ListProduto from './components/produtos/listProduto';
import AddFormaPagamento from './components/formaPagamento/addFormaPagamento';

import Home from './components/Home'

const Drawer = createDrawerNavigator()

export default function App() {
  return (
  
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Cadastrar Usuário" component={AddUsuario} />
        <Drawer.Screen name="Listar Produto" component={ListProduto} />
        <Drawer.Screen name="Adicionar Forma de Pagamento" component={AddFormaPagamento} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
