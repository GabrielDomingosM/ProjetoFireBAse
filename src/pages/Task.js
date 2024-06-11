import { View, StyleSheet, Text, TouchableOpacity, FlatList } from "react-native";
import React, {useState, useEffect} from "react";
import { collection, onSnapshot } from 'firebase/firestore';
import { database } from "../config/firebaseconfig";

export default function Task({navigation}){

    
    const [task, setTask] = useState([]); // lista coloca -> []

    useEffect(() => {
        const taskCollection = collection(database, "Tasks");

    })

    return (
    <View>
        <Text>Aqui fica as task</Text>

        <TouchableOpacity onPress={() => navigation.navigate("NewTask")}>
            <Text>New Task</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Details")}>
            <Text>Details</Text>
        </TouchableOpacity>

    </View>
    )
};