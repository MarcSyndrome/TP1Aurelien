import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../Styles/styles';
import { MaterialIcons } from '@expo/vector-icons';


const Goal = ({ goal, onDelete }) => {
    return (
        <View style={styles.goalContainer}>
            <Text style={styles.goalText}>{goal}</Text>
                <TouchableOpacity onPress={onDelete}>
                    <MaterialIcons name="delete" size={22} color="black" style={styles.icon} />
                </TouchableOpacity>
        </View>
    );
};

export default Goal;
