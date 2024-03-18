import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen' // import la page d'accueil où se trouvent les catégories
import CategoryMealsScreen from './screens/CategoryMealsScreen' // import l'écran où se trouvent les recettes par catégorie
import MealDetailScreen from './screens/MealDetailScreen' // import l'écran des détails de la recette 

// package necessaire navigation :
// npm install @react-navigation/native
// npm install react-native-screens react-native-safe-area-context
// npm i @react-navigation/native-stack

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: "All Categories" }} />
        <Stack.Screen name="CategoryMealsScreen" component={CategoryMealsScreen} options={{ title: "MealsOverView"}} />
        <Stack.Screen name="MealDetailScreen" component={MealDetailScreen} options={{ title: "About the Meal" }} />
      </Stack.Navigator>  
    </NavigationContainer>
  )
}

// const styles = StyleSheet.create({})







