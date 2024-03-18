import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { MEALS } from '../data/data'; // Importez vos recettes depuis le fichier data.js

export default function MealDetailScreen  ({ route })  {
  const { mealId } = route.params; // Obtenir l'ID de la recette sélectionnée

  // Trouver la recette correspondante dans la liste de recettes
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  return (
    <View>
      <Image source={{ uri: selectedMeal.imageUrl }} style={{ width: 200, height: 200 }} />
      <Text>{selectedMeal.title}</Text>
      <Text>Temps de préparation : {selectedMeal.duration} minutes</Text>
      <Text>Ingrédients :</Text>
      {selectedMeal.ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text>Étapes de préparation :</Text>
      {selectedMeal.steps.map((step, index) => (
        <Text key={index}>{step}</Text>
      ))}
    </View>
  );
};

 const styles = StyleSheet.create({});


