import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

const Goal = ({ goal, onDelete }) => {
    return (
        <View style={styles.goalContainer}>
            <Text style={styles.goalText}>{goal}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
                <Text>X</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Goal;

