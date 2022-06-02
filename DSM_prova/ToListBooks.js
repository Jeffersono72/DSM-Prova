import React, {useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import Post from './Post';
import Livro from './Book';

export default function ListaLivros(){
  const [data, setData] = useState([]);
  const [BookSelected, setSelectBook] = useState(null);


  function loadBooks(){

    fetch('https://hn.algolia.com/api/v1/search?query=chave')
      .then((respose) => respose.json())
      .then((json) => {
        setData(json.hits);
      });


   
  }
  useEffect(() => {
    loadBooks();
  }, []);

  function SelectBook(livro){
    setSelectBook(livro);
  }


  return (
    <>
    {
      BookSelected === null ? (
      <>
        <Text style={{textAlign: 'center', fontSize: '30', marginTop: 10, }}> Livros listados:</Text>
        <FlatList
          initialNumToRender={20}
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Post aoSelecionar={() => SelectBook(item)} data={item} />}
        />
      </>) : 
      
        <Livro  aoSelecionar={() => SelectBook(null)} livro={BookSelected} />
      
    }
    
    </>
  );
};

