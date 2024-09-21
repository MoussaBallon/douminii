import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {Link} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/components/searcheBar";


export default function Index() {
  return (
      <SafeAreaView style={styles.container}>

        <Text>Acceuil </Text>
        <SearchBar/>
          
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    
  }
})