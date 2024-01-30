import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./src/assets/login.png')}
        style={styles.png}
      />
      <Text style={styles.login}>LOGIN</Text>
      <StatusBar style="auto" />

      <Text style={styles.labelemail}>Email:</Text>
      <TextInput
        style={styles.email}
        placeholder='Digite seu email'
        placeholderTextColor= '#00AFF5'
      />

      <Text style={styles.labelsenha}>Senha:</Text>
      <TextInput
        style={styles.senha}
        placeholder='Digite sua senha'
        placeholderTextColor= '#00AFF5'
      />

      <TouchableOpacity style={styles.botao}>
        <Text style={styles.textobtn}>ENTRAR</Text>
      </TouchableOpacity>

      <StatusBar style="auto"/>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
    gap:10
  },

  login:{
    color:'#00AFF5'
    
  },

  png:{
    width:120,
    height:120,
    marginBottom:20
  },

  email:{
    width:'80%',
    height: 40,
    borderWidth: 2,
    borderColor:'#00AFF5',
    justifyContent:'center',
    alignItems: 'center',
    paddingLeft: 10,
    color: '#00AFF5',
    marginBottom:10


  },

  senha:{
    width:'80%',
    height: 40,
    borderWidth: 2,
    borderColor:'#00AFF5',
    justifyContent:'center',
    alignItems: 'center',
    paddingLeft: 10,
    color: '#00AFF5',
    marginBottom:10


  },

  botao:{
    width: '60%',
    height:35,
    borderWidth: 1,
    borderColor:'#00AFF5',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 45
  },

  textobtn:{
    fontWeight:'600',
    color:'#00AFF5'
  },

  labelemail:{
    color:'#00AFF5',
    paddingRight:250
    
  },

  labelsenha:{
    color:'#00AFF5',
    paddingRight:250
    
  }
});
