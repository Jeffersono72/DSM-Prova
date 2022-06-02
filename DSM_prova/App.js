import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

import ListaLivros from './ToListBooks';

export default function ToList(){
  return (
    <View>
      <TextInput style={styles.input} placeholder={'Oque deseja pesquisar ??'}/>
      <ListaLivros />
    </View>
  );
};

const styles = StyleSheet.create({

  input: {
    borderColor: 'blue',
    borderWidth: 3,
    borderRadius: 2,
    height: 60,
  },
});