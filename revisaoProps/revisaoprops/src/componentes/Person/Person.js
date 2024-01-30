import {StyleSheet, Text, View} from "react-native";
import { useFonts, Inconsolata_600SemiBold  } from '@expo-google-fonts/inconsolata';


//componente Person
//props : name, age
const Person = ({name, age}) => {
    let [fontsLoaded, fontError] = useFonts({
        Inconsolata_600SemiBold,
      });
    
      if (!fontsLoaded && !fontError) {
        return null;
      }
      
    return (
        
        <View style={styles.container}>
            <Text style={styles.txt}>Nome: {name}</Text>
            <Text style={styles.txt}>Idade: {age}</Text>
        </View>
    );
}
    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#FAB4F0',
            padding:10,
            margin:10,
            borderRadius:5,
            borderWidth:3,
            borderColor:"black"
            
        },

        txt: {
            fontFamily:"Inconsolata_600SemiBold",
            fontSize:15
        }
    })


export default Person;

