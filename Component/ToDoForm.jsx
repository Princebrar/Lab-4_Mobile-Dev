"use client";
import React from 'react';
import { View, TextInput, Button, StyleSheet ,Text,} from 'react-native';
import { useState } from 'react';
function ToDoForm({addTask}) {
 const[taskText, setTaskText] = useState('');
 const addtask = (taskText) => {
    addTask(taskText);
    setTaskText('');
  };
    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Add a new task..."
                onChangeText={(text) => setTaskText(text)}
                value={taskText}
                required
            />
            <Button type="submit" title="Add" onPress={()=>{{taskText != '' ?addtask(taskText):alert("Please Enter a Task")}}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 20,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    },
});
export default ToDoForm;