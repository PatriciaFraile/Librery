import  react, {  useEffect, useState } from 'react'
import { Button, View, Text, TextInput, Form, ScrollView, Alert} from 'react-native';
import axios from 'axios';
import { render } from 'react-dom';


function AddScreen() {
    const initialState={
      id:3,
      title:'hola',
      author:'si',
      description:'yes'
    }
    const[state,setState] = useState(initialState)

    const handleChangeText = (value,name)=>{
      setState({...state,[name]:value})}
    

    const saveBook=async()=>{
      const Data ={
        id:"1",
        title: state.title,
        author:state.author,
        description:state.description
      }
      try {
        const res = await axios.get("http://localhost/libreria-294d6/us-central1/app/")
    console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    
    }
        
    return (
    <ScrollView style={{ flex:1,
      padding:35}}>
    <Text style={{textAlign:'center',
    fontSize:18,
    marginTop: 12,
    marginBottom:20}}>Create Book</Text>
      <View style={{ flex:1,
    padding:0,
    marginBottom:20,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc'}} >
        <TextInput placeholder='Title' value={state.title} onChangeText={(value)=>handleChangeText(value,'title')} />
      </View>
      <View style={{ flex:1,
    padding:0,
    marginBottom:20,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc'}} >
        <TextInput placeholder='Author' value={state.author} onChangeText={(value)=>handleChangeText(value,'author')} />
      </View>
      <View style={{ flex:1,
    padding:0,
    marginBottom:20,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc'}} >
        <TextInput placeholder='Description' value={state.description} onChangeText={(value)=>handleChangeText(value,'description')} /> 
      </View>
      <View style={{ flex:1,
    padding:0,
    marginBottom:20,
    borderBottomWidth:1,
    borderBottomColor:'#cccccc'}}>
        <Button title='Add Book' onPress={saveBook}/>
      </View>
    </ScrollView>
  );
 }

      
    

   
  
export default AddScreen
  