import React, { useState } from "react";
import { KeyboardAvoidingView, StyleSheet, Text, View, TouchableOpacity, TextInput, Platform, Keyboard, ScrollView } from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskItems] = useState([]);

  const createTask = () => {
    Keyboard.dismiss();
    if (task.trim() !== '') {
      setTaskItems([...taskList, task]);
      setTask('');
    }
  }

  const deleteTask = (index) => { 
    let itemsCopy = [...taskList];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "android" ? "padding" : null} 
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>To-Do List</Text>
          <View style={styles.items}>
            {taskList.map((item, index) => (
              <TouchableOpacity key={index} onPress={()=>deleteTask(index)}>
                <Task text={item}/>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.writeTaskWrapper}>
        <TextInput 
          style={styles.input} 
          placeholder={'Add task'} 
          value={task} 
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity onPress={()=>createTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  scrollView: {
    flexGrow: 1,
    paddingBottom: 100, // Ajusta este valor según sea necesario
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  items: {
    marginTop: 30,
  },
  writeTaskWrapper:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#E4E4E5',
  },
  input:{
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#E4E4E5',
    borderWidth: 1
  },
  addWrapper:{
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#E4E4E5',
    borderWidth: 1
  },
  addText:{},
});
