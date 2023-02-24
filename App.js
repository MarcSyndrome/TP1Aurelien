
// importe le composant StatusBar d'expo-status-bar. Ce composant permet d'afficher une barre de statut dans l'application mobile.
import { StatusBar } from 'expo-status-bar';

import { View, ImageBackground } from 'react-native';
// importe React et useState, une fonction de React qui permet de gérer l'état d'un composant.
import React, { useState } from 'react';
import styles from './styles';
import GoalList from './GoalList';
import GoalInput from './GoalInput';

const sampleGoals = [
  'Faire les courses',
  'Aller à la salle de sport 3 fois par semaine',
  'Monter à plus de 5000m d altitude',
  'Acheter mon premier appartement (déjà fait)',
  'Perdre 5 kgs',
  'Gagner en productivité',
  'Apprendre un nouveau langage',
  'Faire une mission en freelance',
  'Organiser un meetup autour de la tech',
  'Faire un triathlon',
];

export default function App() {
  const [goals, setGoals] = useState(sampleGoals);

  const handleAddGoal = (newGoal) => {
    setGoals([...goals, newGoal]);
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

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/treeBack.jpg')} resizeMode="cover" style={styles.image}>
        <View style={styles.containerView}>
          <GoalList goals={goals} onDelete={handleDeleteGoal} />
          <GoalInput onAdd={handleAddGoal} />
        </View>
      </ImageBackground>
    </View>
  )
};

