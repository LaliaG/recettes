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
        <Stack.Screen name="Home/All Categories" component={HomeScreen} options={{ headerShown : false, title: 'All Categories' }} />
        <Stack.Screen name='MealsOverView' component={CategoryMealsScreen} options={({ route })  => ({ title: route.params.mealsInCategoTitle })} />
        <Stack.Screen name="About the Meal" component={MealDetailScreen} options={({ route })   => ({ title: route.params.mealTitle })} />
      </Stack.Navigator>  
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})







