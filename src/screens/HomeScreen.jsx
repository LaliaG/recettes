import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/data'; 


export default function HomeScreen ({ navigation }) {
  const renderCategoryItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryItem}
      onPress={() => {
        // Navigation vers l'écran des recettes de cette catégorie
        navigation.navigate('CategoryMealsScreen', { categoryId: item.id })}}
    >
      <Text style={styles.categoryTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  categoryItem: {
    flex: 1,
    margin: 10,
    padding: 20,
    backgroundColor: '#ccc',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

// Si vous avez déjà trois écrans distincts (Home, Category, Recipe), vous pouvez les placer directement 
// dans le dossier screens de votre projet plutôt que dans un dossier components. La structure des dossiers 
// dépend souvent de la taille et de la complexité de votre application, ainsi que de vos préférences 
// personnelles en matière d'organisation.

// Si vos écrans sont relativement simples et ne nécessitent pas de partage de composants entre eux, 
// il peut être tout à fait logique de les garder dans le même dossier. Cependant, si vous commencez
//  à avoir des composants réutilisables qui sont utilisés dans plusieurs écrans, vous pourriez envisager 
//  de les placer dans un dossier components séparé pour faciliter la gestion et la réutilisation.

// En résumé, il n'est pas absolument nécessaire d'avoir un dossier components distinct si vos écrans sont
//  auto-suffisants et ne partagent pas beaucoup de logique ou de présentation entre eux. Vous pouvez 
//  toujours ajuster la structure de votre projet à mesure qu'il évolue et que de nouveaux besoins se font
//   sentir. La flexibilité est la clé !

User
  

