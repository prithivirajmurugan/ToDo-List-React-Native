import { StatusBar } from 'expo-status-bar';
import React,{useState } from 'react';
import { StyleSheet, Text, View ,TouchableOpacity, KeyboardAvoidingView, Platform ,TextInput, Keyboard} from 'react-native';
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);
  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask('');
    console.log(taskItems);
  }
  const completeTask = (index) => {
    let itemCopy = [...taskItems];
    itemCopy.splice(index, 1);
    setTaskItems(itemCopy);
    
  }
  return (
    <View style={styles.container}>
      {/*Today's Tasks*/}
      <View style={styles.taskWrapper}>
        <Text
          style={styles.sectionTitle} >Today's Tasks</Text>
        <View style={styles.items}>
          {
            taskItems.map((taskItem, index) => {
              return(
              <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                <Task text={taskItem} />
                </TouchableOpacity>)
            })
          }
        </View>
      </View>
       {/*Write a task */}
          <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
              style={styles.writeTaskWrapper}>
        <TextInput style={styles.input} placeholder={"Write a task"} value={task} onChangeText={text=>setTask(text) }/>
              <TouchableOpacity onPress={()=>handleAddTask()} >
                  <View style={styles.addWrapper}>
                      <Text style={styles.addText}>+</Text>
                </View>
              </TouchableOpacity>
              </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBEAED',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {

    fontSize: 24,
    fontWeight:'bold',
  
},
  items: {
    marginTop:30,
  
  },
  input: {
    paddingVertical: 15,
    width: 250,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 60,
    borderColor: '#c0c0c0',
    borderWidth:1,
    width:250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth:1,
    },
  addText: {
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center'


  },
});
