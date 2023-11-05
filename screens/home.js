import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function Home() {
  const [alcool, setAlcool]=useState()
  const [gasolina, setGasolina]=useState()
    const navigator= useNavigation()
  return (
    <View style={styles.container}>
        <Image source={require('../img/logo.png')}/>
      <Text style={styles.title}>Qual a melhor opção?</Text>
      <View style={styles.form}>
      <Text style={styles.label} >Álcool (preço por litro):</Text>
        <TextInput style={styles.input} onChangeText={setAlcool}/>

        <Text style={styles.label}>Gasolina (preço por litro):</Text>
        <TextInput style={styles.input} onChangeText={setGasolina}/>
        <TouchableOpacity style={styles.bot} onPress={()=>navigator.navigate('Results' ,{alcool:alcool, gasolina:gasolina})} >
        <Text style={styles.textBot}>Calcular</Text>
        </TouchableOpacity>
      </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    gap:10,
    paddingTop:50
  },
  title:{
    color:'white',
    fontSize:25,
    fontWeight:'bold'
  },
  label:{
    color:'white',
    fontWeight:'bold',
    fontSize:20,
    marginTop:10
  },
  textBot:{
    color:'white',
    fontWeight:'bold',
    fontSize:25
  },
  input:{
    backgroundColor:'white',
    width:400,
    padding:10,
    borderRadius:5
  },
  form:{
    flex:1,
    gap:8,
    marginTop:30
  },
  bot:{
    alignItems:'center',
    backgroundColor:'red',
    padding:5,
    borderRadius:5,
    marginTop:10
  }
});
