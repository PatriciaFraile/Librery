import  react, {  useEffect, useState } from 'react'
import { Button, View, Text, TextInput, Form, ScrollView,Modal} from 'react-native';
import axios from 'axios';



function AddScreen() {
   const initialState={
      title:'',
      author:'',
      description:''
    }
    const[state,setState] = useState(initialState)
    const [showMessage, setShowMessage] = useState(false);


    const handleChangeText = (value,name)=>{
      setState({...state,[name]:value})}
       useEffect(()=>{
      addBook;
       },[])
      
      const addBook = async()=>{
        const number = Math.floor(Math.random()*100)
        try {
        const response = await axios.post('http://localhost:5000/libreria-294d6/us-central1/app/books/add',{id:number ,title:
        state.title,
        author: state.author,
      description: state.description})
      console.log(response.data);
        } catch (error) {
          console.error("Error",error);
        }
        setShowMessage(true)
      setState({

      })

      }
   
      
    return (
      <ScrollView style={{ flex:1,
        padding:35,backgroundColor:'#FFFFFF'}}>
      <Text style={{textAlign:'center',
      fontSize:18,
      marginTop: 12,
      marginBottom:20}}>Create Book</Text>
        <View style={{ flex:1,
      padding:0,
      marginBottom:20,
      borderBottomWidth:1,
      borderBottomColor:'#cccccc',
      backgroundColor:'#EDEDED',borderRadius:10,width:250}} >
          <TextInput placeholder='Title' value = {state.title} onChangeText={(value)=>handleChangeText(value,'title')}  />
        </View>
        <View style={{ flex:1,
      padding:0,
      marginBottom:20,
      borderBottomWidth:1,
      borderBottomColor:'#cccccc',
      backgroundColor:'#EDEDED',borderRadius:10,width:250}} >
          <TextInput placeholder='Author' value={state.author} onChangeText={(value)=> handleChangeText(value,'author')}  />
        </View>
        <View style={{ flex:1,
      padding:0,
      marginBottom:20,
      borderBottomWidth:1,
      borderBottomColor:'#cccccc',
      backgroundColor:'#EDEDED',borderRadius:10,width:250}} >
          <TextInput placeholder='Description' value={state.description} onChangeText={(value)=>handleChangeText(value,'description')} /> 
        </View>
        <View style={{ flex:1,
      padding:0,
      marginBottom:20,
      borderBottomWidth:1,
      borderBottomColor:'#cccccc'}}>
          <Button title='Add Book' onPress={addBook}/>
          </View>

          <Modal
        visible={showMessage}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowMessage(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#FFFFFF'}}>
          <View style={{backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
}}>
            <Text style={{ marginBottom: 10,
    fontSize: 18,}}>¡Added Book!</Text>
            <Button title="Close" onPress={() => setShowMessage(false) } />
          </View>
        </View>
      </Modal>
      </ScrollView>
    );
 }
export default AddScreen
  