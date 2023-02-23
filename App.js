import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

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
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold" }}>app.js</Text>
      {sampleGoals.map((goal, index) => (
        <Text key={index} style={{ color: goal.red ? "red" : "black" }}>
          {goal.text} {goal.boldText && <Text style={{ fontWeight: "bold" }}>{goal.boldText}</Text>}
        </Text>
      ))}
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
});
