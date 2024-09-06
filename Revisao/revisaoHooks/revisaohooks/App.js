import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const[count, setCount]= useState(0);

  //funcao de incremento
  const incrementar = () => {
    setCount(count + 1)
  }

  const decrementar = () => {
    setCount (count - 1)
  }

  useEffect(() => {
    console.warn(`Contador atualizado: ${count}`)
  }, [count])

  return (
    <View style={styles.container}>

      <Text>Contador: {count} </Text>
      
      <StatusBar style="auto" />

      <TouchableOpacity style={styles.btni} onPress={incrementar}>
        <Text style={styles.texti}>Incrementar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnd} onPress={decrementar}>
        <Text style={styles.textd}>Decrementar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap:10
  },

  btni:{
    width:120,
    height:25,
    alignItems:"center",
    justifyContent:"center",
    display:"flex",
    borderWidth:2,
    backgroundColor:"#23E83E",
    borderRadius:6
  },

  btnd:{
    width:120,
    height:25,
    alignItems:"center",
    justifyContent:"center",
    display:"flex",
    borderWidth:2,
    backgroundColor:"#F0002A",
    borderRadius:6
  },

  texti:{
    color:"black",
    fontSize:15
  },

  textd:{
    color:"white",
    fontSize:15
  }
});
