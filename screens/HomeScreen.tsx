import { StyleSheet, Text, View , ActivityIndicator} from "react-native";
import React from "react";
import {Link} from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "@/components/searcheBar";
import { ThemedText } from "@/components/ThemedText";
import { useEffect, useState } from 'react';
import API from '../api'; // Assurez-vous que le chemin est correct

interface UserData {
  nom: string;
  email?: string; // Utilisez '?' pour les champs qui peuvent être absents
}

export default function HomeScreen() {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await API.get('/utilisateur/3', {
        headers: {
          Authorization: 'Bearer YOUR_TOKEN_HERE', // Assurez-vous d'inclure le token approprié
        }
      });
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SafeAreaView style={styles.container} >
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" /> // Indicateur de chargement pendant la récupération des données
      ) : (
        <View style={styles.text}>
          <Text style={styles.text}>{user ? user.nom : 'Utilisateur'}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    opacity:10,
    backgroundColor: '#2E8B57', flex: 1/5,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
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
