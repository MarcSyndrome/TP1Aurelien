

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
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

export default function App() {
  const [newGoal, setNewGoal] = useState("");
  const [goals, setGoals] = useState(sampleGoals);

  const handleAddGoal = () => {
    if (newGoal.trim() === "") {
      return;
    }
    setGoals([...goals, newGoal]);
    setNewGoal("");
  };

  const handleDeleteGoal = (index) => {
    const newGoals = [...goals];
    newGoals.splice(index, 1);
    setGoals(newGoals);
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerView}>
        <Text style={{ fontWeight: "bold" }}>app.js</Text>
        {goals.map((goal, index) => (
          <View style={styles.goalContainer} key={index}>
            <Text style={styles.goalText}>{goal}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteGoal(index)}>
              <Text style={styles.deleteButton}>X</Text>
            </TouchableOpacity>
          </View>
        ))}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Ajouter un nouvel objectif"
            value={newGoal}
            onChangeText={(text) => setNewGoal(text)}
          />
          <TouchableOpacity style={styles.button} onPress={handleAddGoal}>
            <Text style={styles.buttonText}>Add</Text>
          </TouchableOpacity>
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
    margin: 10,
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
