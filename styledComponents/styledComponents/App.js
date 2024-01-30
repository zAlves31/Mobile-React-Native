import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Container } from './src/components/Container/Container';
import {Titlei, Titled, Titlecont} from './src/components/Title/Title'
import { Buttoni, Buttond } from './src/components/Button/Button';
import { Count } from './src/components/Count/Count';

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
    <Container>

      <Count>
        <Titlecont>{count} </Titlecont>
      </Count>
      
      
      <Buttoni onPress={incrementar}>
        <Titlei>Incrementar</Titlei>
      </Buttoni>

      <Buttond onPress={decrementar}>
        <Titled>Decrementar</Titled>
      </Buttond>

      <StatusBar style="auto" />
      
    </Container>
  );
}