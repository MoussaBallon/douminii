import { Text, View, TextInput, StyleSheet } from 'react-native'
import React, { Component, useState } from 'react'

// components/SearchBar.js

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Tapez ici pour rechercher..."
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  searchBar: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  text: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default SearchBar;
