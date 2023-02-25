import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';

export default function App() {

  const handlePress = () => console.log("PRessed");

  return (

    

    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2} onPress={ handlePress }>
        My First App long long long hasdb hasdasds hhiu yasdasda hbliuhhliuasd iuhbasdbas
        
      </Text>
      
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#ffff',
    
  },
});
