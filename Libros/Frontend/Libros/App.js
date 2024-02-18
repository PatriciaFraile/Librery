import  react from 'react'
import {Button, View, Text, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddScreen from './src/AddScreen';
import UpdateScreen from './src/UpdateScreen';
import ListScreen from './src/ListScreen';
import DeleteScreen from './src/DeleteScreen'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Add Book"
        onPress={() => navigation.navigate('Add')}
      />
        <Button
        title="Update Book"
        onPress={() => navigation.navigate('Update')}
      />
      <Button
        title="List Books"
        onPress={() => navigation.navigate('List')}
      />
      <Button
      title="Delete Book"
      onPress={() => navigation.navigate('Delete')}
    />
    </View>
  );
}



const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Add" component={AddScreen} />
      <Stack.Screen name="Update" component={UpdateScreen} />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Delete" component={DeleteScreen} />

    </Stack.Navigator>
  </NavigationContainer>
);
  
}
export default App


