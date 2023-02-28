import { View, ImageBackground } from 'react-native';
// importe React et useState, une fonction de React qui permet de gérer l'état d'un composant.
import styles from './Styles/styles';
import GoalList from './component/GoalList';
import GoalInput from './component/GoalInput';

export default function App() {

  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/treeBack.jpg')} resizeMode="cover" style={styles.image}>
        <View style={[styles.containerView]}>
          <GoalList/>
          <GoalInput/>
        </View>
      </ImageBackground>
    </View>
  )
};

