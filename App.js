import React from 'react';
import { Text, StyleSheet, View, Image, FlatList } from 'react-native';
import Header from './components/Header';
import Card from './components/Card';
import DATA from './data/index'
import DATA01 from './data01/index'

export default function App() {
  return (
    <View style={estilo.container}>
      <Header></Header>
      <Text style={estilo.tituloCard}>Camisetas de Time Femininas</Text>

     <View style = {{width:'100%'}}> 
      <FlatList
      horizontal = {true}
      data = {DATA}
      keyExtractor = {(item) => item.id}
      renderItem = {({item}) => (
    
        <Card
        titulo = {item.titulo}
        imagem = {item.imagem}
        descricao = {item.descricao}
        />

      ) }
      /> </View>


<Text style={estilo.tituloCard}>Camisetas de Time Masculina</Text>

<View style = {{width:'100%'}}>
<FlatList 
      horizontal = {true}
      data = {DATA01}
      keyExtractor = {(item) => item.id}
      renderItem = {({item}) => (
    
        <Card
        titulo = {item.titulo}
        imagem = {item.imagem}
        descricao = {item.descricao}
        
        />
        

      ) }
      /> </View>
     
    
    </View>
  );
}
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
    borderColor: '#90E0EF',
    paddingHorizontal: 20,
  },
  tituloCard: {
    fontSize: 33,
    fontWeight: 'bold',
    color: '#FFF',
  },
});