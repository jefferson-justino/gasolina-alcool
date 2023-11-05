import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
export default function Results({route}) {
  const {alcool} =route.params
  const {gasolina} =route.params
    const navigator = useNavigation()
    let calculo = alcool/gasolina
  return (
    <View style={styles.container}>
     <Image source={require('../img/gas.png')}/>
      <Text style={styles.title}>Compensa mais usar {calculo<0.7? 'Álcool':'Gasolina'}</Text>
      <View style={styles.result}>
      <Text style={styles.subtit} >Com os preços:</Text>
      <Text style={styles.val} >Álcool: R${alcool}</Text>
      <Text style={styles.val}>Gasolina: R${gasolina}</Text>
        <TouchableOpacity style={styles.bot} onPress={()=>navigator.navigate('Home')} >
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
    paddingTop:80
  },
  title:{
    color:'green',
    fontSize:25,
    fontWeight:'bold'
  },
  val:{
    color:'white',
    fontSize:15,
    marginTop:10
  },
  textBot:{
    color:'red',
    fontWeight:'bold',
    fontSize:15
  },
    result:{
    flex:1,
    gap:8,
    marginTop:30,
    alignItems:'center'
  },
  bot:{
    alignItems:'center',
    borderWidth:1,
    borderColor:'red',
    padding:5,
    borderRadius:5,
    marginTop:30,
    width:300
  },
  subtit:{
    color:'white',
    fontSize:25,
    fontWeight:'bold'
  }
});
