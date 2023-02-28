import React, { useState } from 'react';
import { View, TextInput, Pressable, Text } from 'react-native';
import styles from '../Styles/styles';

const GoalInput = ({ onAdd }) => {
    const [newGoal, setNewGoal] = useState("");
    const [inputStyle, setInputStyle] = useState(styles.input);

    const handleAddGoal = () => {
        if (newGoal.trim() === '') {
            setInputStyle({ ...styles.input, borderColor: "red" });
            return;
        }
        setInputStyle(styles.input); // Permet à l'application de déborder sur la barre du haut du téléphone
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
            <Pressable android_ripple={{ color: "#AED3E3", radius: 40}} style={styles.button} onPress={handleAddGoal}>
                <Text style={styles.buttonText}>Ajouter</Text>
            </Pressable>
        </View>
    );
};

export default GoalInput;
