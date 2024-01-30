import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.login}>Olá Fans de Dragon Ball Z</Text>
      <StatusBar style="auto" />

      <Image
        source={require('./src/assets/dragonball.gif')}
        style={styles.png}
      />

      <Text style={styles.labelpersonagem}>Personagem:</Text>
      <TextInput
        style={styles.personagem}
        placeholder='Digite seu personagem favorito de dragon ball!'
        placeholderTextColor= '#E03F14'
      />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textobtn}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9BBCDE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  login:{
    color:'#E03F14'
  },

  png:{
    width:240,
    height:240,
  },


  personagem:{
    width:'80%',
    height: 40,
    borderWidth: 2,
    borderColor:'#E03F14',
    justifyContent:'center',
    alignItems: 'center',
    paddingLeft: 10,
    color: '#E03F14',
  },

  labelpersonagem:{
    color:'#E03F14',
    paddingRight:230
  },

  botao:{
    width: '60%',
    height:35,
    borderWidth: 1,
    borderColor:'#E03F14',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 45
  },

  textobtn:{
    fontWeight:'600',
    color:'#E03F14'
  },

});
