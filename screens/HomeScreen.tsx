import { StyleSheet, Image, Text, View, ActivityIndicator } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from 'react';
import axios from "axios";


interface UserData {
  nom: string;
  email?: string;
  prenom: string;
}

export default function HomeScreen() {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://10.0.2.2:5000/utilisateur/3')
      .then(response => {
        setUser(response.data);
        setLoading(false); // Mettez à jour l'état de chargement après la récupération
      })
      .catch(error => {
        console.error(error);
        setLoading(false); // Assurez-vous d'arrêter le chargement même en cas d'erreur
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.text}>Bienvenu, {user ? user.prenom : 'Utilisateur inconnu'}
            <Image
                      source={require('../assets/icons/settings.png')} // Chemin de l'image
                      style={styles.image}
                      />
          </Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1/5,
    backgroundColor: '#2E8B57',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
  },
  textContainer: {
    marginEnd:30,
    flex:1,
    position:'absolute',
    left:50,
    gap: 100,
  },
  text: {
    // lineHeight:24,
    fontSize: 24,
    // fontFamily: 'SofadiOne-Regular',
    fontWeight: 'bold',
    color: '#fff',
    textTransform: 'capitalize',
  },
  image:{
    width: 50,
    height: 50, // Taille de l'image
    // resizeMode: 'contain', // Pour ajuster l'image
  }
});
