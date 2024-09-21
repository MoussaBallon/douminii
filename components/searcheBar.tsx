import { Text, View, TextInput, StyleSheet, Image } from 'react-native'
import React, { Component, useState } from 'react'

// components/SearchBar.js
const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
    <View style={styles.header}>
          
    <Image
        source={require('../assets/icons/look.png')}  // Chemin de l'image locale
        style={styles.image}
      />
    <TextInput
      style={styles.searchBar}
      placeholder="Tapez ici pour rechercher..."
      value={searchText}
      onChangeText={text => setSearchText(text)}
    /> 
    </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 24,
    justifyContent: 'center',  
    alignItems: 'center',
  }, 
  header:{
    paddingTop:80,
      flexDirection:'row',
      alignItems:'center',
      gap:16
  },
  image:{
    width:40,
    height:40,
    color:'black',
  },
  searchBar: {
    height: 40,
    width:'80%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 0,
    paddingLeft: 4,
    backgroundColor:'#fff',
    borderRadius:16
  },
  text: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default SearchBar;
