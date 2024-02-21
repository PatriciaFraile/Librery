import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, TouchableOpacity,TextInput,Modal} from 'react-native';
import axios from 'axios';
import { Button } from 'react-native-elements';


const ListScreen = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [updateVisible, setUpdateVisible] = useState(false);
  const [updateState,setUpdateState] = useState('')
  
  const handleChangeText = (item)=>{
    setUpdateState(item)
  }


  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/libreria-294d6/us-central1/app/books');
      setItems(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  const handlePress=(item)=>{
     setSelectedItem(item);
    setModalVisible(true);
  }
  
  const deleteBook=async(item)=>{
    console.log(item.id);
    try {
      const response = await axios.delete('http://localhost:5000/libreria-294d6/us-central1/app/books/delete/'+item.id)
    console.log(response.data);
    setModalVisible(false)
      } catch (error) {
        console.error("Error",error);
      }

  }
  
  const updateBook = async(id)=>{
    const e={
      description:updateState
    }
    setUpdateVisible(false)
    try {
      const response = await axios.put(`http://localhost:5000/libreria-294d6/us-central1/app/books/update/${id}`,e)
      console.log(response.data);
    } catch (error) {
      console.error("Error",error);
    }

  }
  const updatesBook= async(item)=>{
    setSelectedItem(item)
    setModalVisible(false)
    setUpdateVisible(true)
 
  }


  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' ,backgroundColor:'#FFFFFF'}}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 10}} >
            <TouchableOpacity style={{backgroundColor:'#EDEDED',borderRadius:10,width:250}} onPress={()=>
            handlePress(item)}>
            <Text> Title : {item.title}</Text>
            <Text> Author : {item.author}</Text>
            </TouchableOpacity>
          </View>
        )}
      />
       <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={{  flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22, }}>
          <View style={{ margin: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 35,
    padding: 35,
    alignItems: 'center',}}>
            <Button title="X" style={{marginRight:250}} onPress={() => setModalVisible(false)} />
            <Text>Title : {selectedItem && selectedItem.title}</Text> 
            <Text> Author :{selectedItem && selectedItem.author}</Text> 
            <Text> Description :{selectedItem && selectedItem.description}</Text> 
            <View  style={{flexDirection:'row',paddingTop:10}}>
            <Button title="Update" style={{marginRight:15}} onPress={() => updatesBook(selectedItem)} />
            <Button title="Delete"  onPress={() => deleteBook(selectedItem)}  />
            </View>
           

          </View>
        </View>
      </Modal>
      <Modal
        animationType="fade"
        transparent={true}
        visible={updateVisible}
        onRequestClose={() => setUpdateVisible(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#FFFFFF' }}>
          <View style={{ backgroundColor: '#FFFFFF', padding: 20,
    borderRadius: 10,
    alignItems: 'center' }}>
            <Text>Title : {selectedItem && selectedItem.title}</Text> 
            <Text> Author :{selectedItem && selectedItem.author}</Text> 
          <TextInput placeholder='Description' value={updateState} onChangeText={(value)=>handleChangeText(value,'description')} /> 
          <Button title='Update' onPress={()=>updateBook(selectedItem.id,updateState)}/>
          </View>
        </View>
      </Modal>
    </View>
  );
}
  
  


export default ListScreen;
