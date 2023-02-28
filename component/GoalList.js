import { FlatList, View, Text } from 'react-native';
import DeleteGoal from './DeleteGoal';              
// importe React et useState, une fonction de React qui permet de gérer l'état d'un composant.
import React, { useState } from 'react';
import EditModal from '../component/EditModal';
import styles from '../Styles/styles';


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


const GoalList = () => {
  const [goals, setGoals] = useState([...sampleGoals]);

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

// Fonction pour modifier un objectif de la liste
const handleEditGoal = (index, EditText) => {
  // on met a jour la liste des objectifs
  const edit = goals.map((goal, indexList) => (
    (indexList === index) ? 
    EditText
    : goal
  ));
  setGoals(edit);
}

  return (     
  <FlatList
    data={goals}
    renderItem={({ item, index }) => (
      <View style={styles.row}>
      <Text style={styles.goalText}>{item}</Text>
      <EditModal
        index={index} initialValue={item} handleEditGoal={handleEditGoal}>
      </EditModal>
      <DeleteGoal index={index} goal={item} handleDeleteGoal={handleDeleteGoal}>
      </DeleteGoal>
      </View>
    )}
    keyExtractor={(index) => index.toString()}
    />
  );
};

export default GoalList;