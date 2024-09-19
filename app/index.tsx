import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {Link} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
      <SafeAreaView style={styles.container}>
        <Text>Acceuil </Text>
        <Link href="/about"> a propos</Link>
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange', flex: 1/6,
    margin:10, marginTop:40,
    borderRadius:20
  }
})