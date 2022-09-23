import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native'

//Desde el momento  que  nosotros utilizamos el navigation container tenemos acceso a unos props de manera global en la app
//navigation esta contenida dentro de ellos y nos ayuda a navegar 
const Inicio = ({navigation}) => {

    const informacion = { 
        clienteId: 5000,
        totalpagar: 500
    }
//Una funcion que nos hace ir al componente nosotros
    const visitarNosotros = () => {
        navigation.navigate('Nosotros', informacion)
    }

    return ( 
        <View style={styles.contenedor}>
            <Text>Inicio</Text>
            <Button
                title="Ir a Nosotros"
                onPress={ () => visitarNosotros() }
            />
        </View>
       
     );
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
 
export default Inicio;