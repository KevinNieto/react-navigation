## PROCESO DE INSTALACION DE REACT NAVIGATION
1. Instalamos react navigation de manera global:

`npm i @react-navigation/native`

2. Instalamos todas las dependencias que este necesita para trabajar:

`yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view`


3. Instalamos el tipo de navegacion que utlizaremos: 

`yarn add @react-navigation/stack`

4. Si estamos en ios: 

`cd ios && pod install`


5. Modificamos el archivo babe.config.js:

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
};

6. Agregamos las siguientes lineas en  /android/app/build.gradle  en dependencies:

implementation 'androidx.appcompat:appcompat:1.1.0rc01'
implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'
