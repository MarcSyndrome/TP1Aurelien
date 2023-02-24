import React from 'react';
import { View } from 'react-native';
import Goal from './Goal';

const GoalList = ({ goals, onDelete }) => {
  return (
    <View>
      {goals.map((goal, index) => (
        <Goal key={index} goal={goal} onDelete={() => onDelete(index)} />
      ))}
    </View>
  );
};

export default GoalList;