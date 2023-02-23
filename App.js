
// importe le composant StatusBar d'expo-status-bar. Ce composant permet d'afficher une barre de statut dans l'application mobile.
import { StatusBar } from 'expo-status-bar';

// importe plusieurs composants de react-native qui seront utilisés dans l'application.
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

// importe React et useState, une fonction de React qui permet de gérer l'état d'un composant.
import React, { useState } from 'react';

const sampleGoals = [
  { text: "Faire les courses" },
  { text: "Aller à la salle de sport 3 fois par semaine" },
  { text: "Monter à plus de 5000m d altitude" },
  { text: "Acheter mon premier appartement (déjà fait)" },
  { boldText: "Perdre 5 kgs" },
  { text: "Gagner en productivité" },
  { text: "Apprendre un nouveau langage" },
  { text: "Faire une mission en freelance" },
  { text: "Organiser un meetup autour de la tech" },
  { text: "Faire un triathlon" },
];

export default function App() {

  // État local pour stocker la valeur de l'input
  const [newGoal, setNewGoal] = useState("");

  // Fonction pour ajouter un nouveau goal à la liste
  const handleAddGoal = () => {
    // Vérifier si la valeur de l'input est vide
    if (newGoal.trim() === "") {
      return;
    }
    // Ajouter le nouveau goal à la liste
    sampleGoals.push({ text: newGoal, red: false });
    // Réinitialiser la valeur de l'input
    setNewGoal("");
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold" }}>app.js</Text>
      {/* Affiche tous les objectifs de la liste */}
      {sampleGoals.map((goal, index) => (
        <Text key={index} style={{ color: goal.red ? "red" : "black" }}>
          {goal.text} {goal.boldText && <Text style={{ fontWeight: "bold" }}>{goal.boldText}</Text>}
        </Text>
      ))}

      {/* On ajoute dans la vue l'input et le bouton en "row" */}
      <View style={styles.inputContainer}>

        {/* Champ input pour ajouter un nouvel objectif */}
        <TextInput
          style={styles.input}
          placeholder="Ajouter un nouvel objectif"
          value={newGoal}
          onChangeText={(text) => setNewGoal(text)}
        />

        {/* Bouton pour ajouter le nouvel objectif */}
        <TouchableOpacity style={styles.button} onPress={handleAddGoal}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width:"185px"
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
