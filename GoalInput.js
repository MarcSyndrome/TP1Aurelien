import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

const GoalInput = ({ onAdd }) => {
    const [newGoal, setNewGoal] = useState('');
    const [inputStyle, setInputStyle] = useState(styles.input);

    const handleAddGoal = () => {
        if (newGoal.trim() === '') {
            setInputStyle({ ...styles.input, borderColor: "red" });
            return;
        }
        setInputStyle(styles.input); // remet la bordure en noir
        onAdd(newGoal);
        setNewGoal('');
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={inputStyle}
                placeholder="Ajouter un nouvel objectif"
                value={newGoal}
                onChangeText={setNewGoal}
            />
            <TouchableOpacity style={styles.button} onPress={handleAddGoal}>
                <Text style={styles.buttonText}>Ajouter</Text>
            </TouchableOpacity>
        </View>
    );
};

export default GoalInput;
