import React from 'react';
import { StyleSheet, Text, TouchableOpacity} from 'react-native';
import Stars from './Stars'

export default function Post({ data, aoSelecionar}) {

    return ( 
        <>
        <TouchableOpacity onPress={aoSelecionar} style={[styles.card]}>
        <Text style={styles.title} numberOfLines={1}>
          {data.title} 
        </Text>

        <Text style={styles.url} numberOfLines={5}>
          {data.url} 
        </Text>

        <Text style={styles.author} numberOfLines={6}>
          {data.author} 
        </Text>

        <Stars/>
      </TouchableOpacity>
      
        </>
    );
  }

  const styles = StyleSheet.create({
    card: {
      borderColor: 'black',
      borderWidth: 2,
      borderRadius: 5,
      padding: 10,
      marginHorizontal: 25,
      marginTop: 25,
    },
  
    title: {
      fontSize: 20,
      color: 'blue',
      fontWeight: '600',
    },
  
  });
  