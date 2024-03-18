import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
 
const MealDetail = props => {
  return (
<ScrollView>
<Image source={{ uri: props.selectedMeal.imageUrl }} style={styles.image} />
<View style={styles.details}>
<Text>{props.selectedMeal.duration}m</Text>
<Text>{props.selectedMeal.complexity.toUpperCase()}</Text>
<Text>{props.selectedMeal.affordability.toUpperCase()}</Text>
</View>
<Text style={styles.title}>Ingredients</Text>
      {props.selectedMeal.ingredients.map(ingredient => (
<Text key={ingredient}>{ingredient}</Text>
      ))}
<Text style={styles.title}>Steps</Text>
      {props.selectedMeal.steps.map(step => (
<Text key={step}>{step}</Text>
      ))}
</ScrollView>
  );
};
 
const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center',
    marginVertical: 10,
  },
});
 
export default MealDetail;