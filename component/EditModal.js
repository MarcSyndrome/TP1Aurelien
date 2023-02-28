import React, {useState} from 'react';
import {Modal, StyleSheet, Text, Pressable, View, TextInput} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
    centeredView: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: 20,
    },
    iconEdit:{
        paddingBottom:5,
        paddingLeft:15
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonClose: {
      backgroundColor: 'green',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
  });
  
  
export default function EditModal(props) {
const { handleEditGoal, index, initialValue } = props;
  const [modalVisible, setModalVisible] = useState(false);
  const [EditText, setEditText] = useState(initialValue);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <TextInput
            style={styles.modalText}
            value={EditText}
            onChangeText={text => setEditText(text)}
        />
        <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {handleEditGoal(index, EditText); setModalVisible(!modalVisible)}}>
            <Text style={styles.textStyle}>Modifier</Text>
        </Pressable>
        </View>
    </View>
</Modal>
    <Pressable
        onPress={() => setModalVisible(true)}>
        <MaterialIcons name="edit" size={23} color="black" style={styles.iconEdit} />
    </Pressable>
    </View>
  );
};

