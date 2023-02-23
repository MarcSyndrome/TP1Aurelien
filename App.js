
// importe le composant StatusBar d'expo-status-bar. Ce composant permet d'afficher une barre de statut dans l'application mobile.
import { StatusBar } from 'expo-status-bar';

// importe plusieurs composants de react-native qui seront utilisés dans l'application.
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

// importe React et useState, une fonction de React qui permet de gérer l'état d'un composant.
import React, { useState } from 'react';

const sampleGoals = [
  "Faire les courses",
  "Aller à la salle de sport 3 fois par semaine",
  "Monter à plus de 5000m d altitude",
  "Acheter mon premier appartement (déjà fait)",
  "Perdre 5 kgs",
  "Gagner en productivité",
  "Apprendre un nouveau langage",
  "Faire une mission en freelance",
  "Organiser un meetup autour de la tech",
  "Faire un triathlon",
];

// On exporte notre composant principal qui contiendra le code de notre application
export default function App() {

  // On utilise useState pour stocker la valeur de l'input et la liste d'objectifs
  const [newGoal, setNewGoal] = useState("");
  const [goals, setGoals] = useState(sampleGoals);

  // Fonction pour ajouter un nouveau goal à la liste
  const handleAddGoal = () => {

    // Si l'input est vide ou ne contient que des espaces, on ne fait rien
    if (newGoal.trim() === "") {
      return;
    }

    // On ajoute le nouvel objectif à la liste
    setGoals([...goals, newGoal]);
    // On réinitialise la valeur de l'input
    setNewGoal("");
  };

  // Fonction pour supprimer un objectif de la liste
  const handleDeleteGoal = (index) => {
    // On crée une copie de la liste actuelle
    const newGoals = [...goals];
    // On supprime l'objectif à l'index donné
    newGoals.splice(index, 1);
    // On met à jour la liste des objectifs
    setGoals(newGoals);
  };

  // On retourne notre JSX, c'est-à-dire l'interface de notre application
  return (
    <View style={styles.container}>
      <View style={styles.containerView}>
        <Text style={{ fontWeight: "bold" }}>app.js</Text>
        {/* On mappe chaque objectif de la liste pour l'afficher à l'utilisateur */}
        {goals.map((goal, index) => (
          <View style={styles.goalContainer} key={index}>
            <Text style={styles.goalText}>{goal}</Text>

            {/* On ajoute un bouton pour supprimer chaque objectif */}
            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteGoal(index)}>
              <Text style={styles.deleteButton}>X</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* On ajoute un input pour que l'utilisateur puisse ajouter un nouvel objectif */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ajouter un nouvel objectif"
            value={newGoal}
            onChangeText={(text) => setNewGoal(text)}
          />

          {/* On ajoute un bouton pour valider l'ajout du nouvel objectif */}
          <TouchableOpacity style={styles.button} onPress={handleAddGoal}>
            <Text style={styles.buttonText}>Ajouter</Text>
          </TouchableOpacity>

          {/* On ajoute une StatusBar pour améliorer l'expérience utilisateur */}
          <StatusBar style="auto" />
        </View>
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
  containerView: {
    backgroundColor: "#D6DBDF",
    padding: 40,
    borderRadius: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    margin: 20,
    width: 200,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    paddingHorizontal: 8,
  },
  goalContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  goalText: {
    flex: 1,
    backgroundColor: "#FFFFDF",
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  deleteButton: {
    backgroundColor: "#C700DF",
    padding: 5,
    borderRadius: 5,
  },
})
