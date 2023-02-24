import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';
import { MaterialIcons } from '@expo/vector-icons';

const Goal = ({ goal, onDelete, onEdit }) => {
    return (
        <View style={styles.goalContainer}>
            <Text style={styles.goalText}>{goal}</Text>
                <TouchableOpacity onPress={onEdit}>
                    <MaterialIcons name="edit" size={22} color="black" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete}>
                    <MaterialIcons name="delete" size={22} color="black" style={styles.icon} />
                </TouchableOpacity>
        </View>
    );
};

export default Goal;
