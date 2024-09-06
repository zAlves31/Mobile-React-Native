import { SafeAreaView, StatusBar, ScrollView, FlatList } from 'react-native';
import Person from './src/componentes/Person/Person';

export default function App() {

  //simulando uma lista de pessoas
  const peoplelist = [
    {id: '1', name:'joao', age:19},
    {id: '2', name:'Gab', age:16},
    {id: '3', name:'Eduardo', age:18},
    {id: '4', name:'Gustavo', age:18}

  ]

  return (
    // <ScrollView>
    //   <SafeAreaView>
    //     <Person name='Joao' age='19'/>
    //     <Person name='Eduardo' age='18'/>
    //     <Person name='Gustavo' age='18'/>
    //     <Person name='Gab' age='16'/>
    //     <Person name='Vicinius' age='17'/>
    //     <Person name='Crystal' age='13'/>
    //     <Person name='celsao' age='56'/>
    //     <Person name='Silvio Santos' age='93'/>
    //     <Person name='Gabriel Victor' age='17'/>
    //     <Person name='Marcio' age='29'/>
    //     <Person name='Marcelo' age='19'/>
    //     <Person name='Gru' age='35'/>
    //     <Person name='Macedo' age='17'/>
    //     <Person name='Enzo' age='16'/>
    //     <Person name='Eduardo' age='14'/>
    //     <Person name='Alan' age='33'/>
    //     <Person name='Everton' age='??'/>

    //     <StatusBar/>  
    //   </SafeAreaView>
    // </ScrollView>

    // usando FlatList
    <FlatList
      data={peoplelist}
      keyExtractor={(item) => item.id}

      //leitura da lista
      renderItem={({item}) =>(

        //exibe cada item da lista
        <Person name={item.name} age={item.age}/>
      )}
    />
  );
}


