import { Text, type TextProps, StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  mainTitle: {
    fontSize: 30, // Grande taille pour le titre principal
    fontWeight: 'bold',
    color: '#333', // Couleur sombre pour un bon contraste
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 20,
    color: '#666', // Couleur légèrement plus douce pour les sous-titres
    marginBottom: 20,
  },
  normalText: {
    fontSize: 16, // Texte normal lisible
    color: '#444',
    lineHeight: 24, // Espacement des lignes pour la lisibilité
  },
  boldText: {
    fontSize: 25,
    fontWeight: 'bold', // Mettre en gras pour attirer l'attention
    color: '#fff', // Couleur vive pour attirer l'attention
    // marginTop: 10,
  },
});
export type Props = TextProps & {
variant?: keyof typeof styles,
color?:string
};

export function ThemedText({variant, color,...rest}:Props) {
  return <Text style={styles[variant ?? 'boldText']} {...rest}/>
}

