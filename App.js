import { StatusBar } from 'expo-status-bar';
// importe le composant StatusBar d'expo-status-bar. Ce composant permet d'afficher une barre de statut dans l'application mobile.

import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
// importe plusieurs composants de react-native qui seront utilisés dans l'application.

import React, { useState } from 'react';
// importe React et useState, une fonction de React qui permet de gérer l'état d'un composant.

const sampleGoals = [
  { text: "Faire les courses", red: true },
  { text: "Aller à la salle de sport 3 fois par semaine", red: false },
  { text: "Monter à plus de 5000m d altitude", red: false },
  { text: "Acheter mon premier appartement", red: false, boldText: "(déjà fait)" },
  { boldText: "Perdre 5 kgs", red: true },
  { text: "Gagner en productivité", red: false },
  { text: "Apprendre un nouveau langage", red: false },
  { text: "Faire une mission en freelance", red: false },
  { text: "Organiser un meetup autour de la tech", red: false },
  { text: "Faire un triathlon", red: false },
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

      {/* Champ input pour ajouter un nouvel objectif */}
      <TextInput
        style={styles.input}
        placeholder="Ajouter un nouveau goal"
        value={newGoal}
        onChangeText={(text) => setNewGoal(text)}
      />

      {/* Bouton pour ajouter le nouvel objectif */}
      <TouchableOpacity style={styles.button} onPress={handleAddGoal}>
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
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
    marginVertical: 10,
    width: "20%",
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
