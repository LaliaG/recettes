import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { MEALS } from '../data/data'; 


export default function CategoryMealsScreen  ({ navigation, route })  {
  const { categoryId } = route.params; // Obtenir l'ID de la catégorie sélectionnée

  // Filtrer les recettes par catégorie
  const mealsInCategory = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  const renderMealItem = ({ item }) => (
    <View>
      <Image source={{ uri: item.imageUrl }} style={{ width: 100, height: 100 }} />
      <Text>{item.title}</Text>
      {/* Afficher d'autres informations sur la recette si nécessaire */}
    </View>
  );

  return (
    <View>
      <FlatList
        data={mealsInCategory}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  flex: 1, 
  justifyContent: 'center', 
  alignItems: 'center'
});