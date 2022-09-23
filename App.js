//Se debe importar el gesture handler antes que todo
import 'react-native-gesture-handler';
import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//NAVIGATION Container: Es el contenedor que sostiene todos los componentes de tu codigo
//STACK NAVIGATION:  Es el stack que trabajamos dentro del navigation container, hay como 3 mas pero esta es el mas estable.



//Creamos el stack fuera del app.js:
const Stack = createStackNavigator();


//En el codigo cubrimos todo dentro de: 
const App  = () => {
    return (
      <>
        <NavigationContainer>

            {/* Aqui volvemos a llamar el stack dentro del Navigation container aqui estaran todas las rutas */}
          <Stack.Navigator
            //   Para indicarle que es la pagina principal
            initialRouteName="Inicio"
            screenOptions={{
              headerTitleAlign: 'right',
              headerStyle: {
                backgroundColor: '#F4511E',
              
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          >
            <Stack.Screen
                name="Inicio"
                component={Inicio}
            />
            <Stack.Screen
                name="Nosotros"
                component={Nosotros}
                //PARAMETROS
                options={ ({route}) => ({
                  title: route.params.clienteId
                }) }
            />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  };
  
  
  export default App;