import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../Styles/styles';
import { MaterialIcons } from '@expo/vector-icons';


export default function DeleteGoal (props) {
    const {  handleDeleteGoal, index} = props;
    return (
        <View style={styles.goalContainer}>
                <TouchableOpacity onPress={() => handleDeleteGoal(index)}>
                    <MaterialIcons name="delete" size={22} color="black" style={styles.icon} />
                </TouchableOpacity>
        </View>
    );
};

