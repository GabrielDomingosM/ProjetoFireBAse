import { View, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";
import { database, collection, addDoc } from "../config/firebaseconfig";
import { useState } from "react";


export default function NewTask(navigation){

    const [NewTask, setNewTask] = useState(null)

    function addNewTask() {
        const taskDocRef = collection(database, 'Tasks');
        addDoc(taskDocRef, {
            description: NewTask,
            status: false  
        })
        navigation.navigate('Task')
    }

    <View style={styles.container}>
        <Text style={styles.txtnewtask}>Aqui fica as NewTask</Text>
        <TextInput
            style={styles.input}
            placeholder="Ex estudar"
            value={NewTask}
            onChangeText={setNewTask}
        />
        <TouchableOpacity 
            style={styles.btnSave}
            onPress={() => {addNewTask()}}
        >
            <Text style={styles.txtbtnSave}>Save</Text>
        </TouchableOpacity>
    </View>
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });