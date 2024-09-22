import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {Link} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/components/searcheBar";
import { ThemedText } from "@/components/ThemedText";


export default function Index() {
  return (
      <SafeAreaView style={styles.container}>

      <View style={styles.text}>
        <ThemedText variant="boldText">Bienvenue, Abdoul </ThemedText>
        </View>
        
          
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    opacity:10,
    backgroundColor: '#2E8B57', flex: 1/5,
    borderRadius:15
  },
  text:{
    position:'relative',
    top:40,
    left:50,
    fontFamily:'Moche',
    fontSize: 50,           // Taille de police plus grande pour accentuer
    fontWeight: 'bold',     // Nom en gras
    color: '#2c3e50',       // Couleur foncée (bleu nuit)
    // letterSpacing: 1.2,     // Espacement des lettres pour un effet visuel subtil
    // textTransform: 'capitalize',
  }
})