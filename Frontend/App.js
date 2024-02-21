import {Button, View, Text,ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddScreen from './src/AddScreen';
import ListScreen from './src/ListScreen';

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={{flex:1, padding:35, backgroundColor:'#FFFFFF'}}>
      <View style={{paddingTop:15}}>
      <Button
        title="Add Book" color='#11A79E' 
        onPress={() => navigation.navigate('Add')}
      />
      </View>
      <View style={{flex:1,
    padding:0,
    paddingTop:35,
    marginBottom:20,}}>
      <ListScreen/>
      </View>
      
    </ScrollView>
  );
}
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Librery">
      <Stack.Screen name="Librery" component={HomeScreen} />
      <Stack.Screen name="Add" component={AddScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
);
  
}

export default App


