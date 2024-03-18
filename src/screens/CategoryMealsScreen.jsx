import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { MEALS } from './data'; // Importez vos recettes depuis le fichier data.js

export default function CategoryMealsScreen  ({ route })  {
  const { categoryId } = route.params; // Obtenez l'ID de la catégorie sélectionnée

  // Filtrer les recettes par catégorie
  const mealsInCategory = MEALS.filter((meal) => meal.categoryIds.includes(categoryId));

  const renderMealItem = ({ item }) => (
    <View>
      <Image source={{ uri: item.imageUrl }} style={{ width: 100, height: 100 }} />
      <Text>{item.title}</Text>
      {/* Affichez d'autres informations sur la recette si nécessaire */}
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