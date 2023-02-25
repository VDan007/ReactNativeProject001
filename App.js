import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView, Image,TouchableWithoutFeedback,TouchableOpacity,TouchableHighlight, Button } from 'react-native';

export default function App() {

  const handlePress = () => console.log("PRessed");
  const imageTap = () => console.log("imgTapped");
  const btnTap = () => alert("btn Tapped");

  return (

    

    <SafeAreaView style={styles.container}>
      <Text numberOfLines={2} onPress={ handlePress }>
        My First App 
      </Text>
      <TouchableHighlight onPress={imageTap}>
        <Image 
          
          source={ {
          width: 200,
          height: 200,
          uri: "https://picsum.photos/200"} }/>
      </TouchableHighlight>

      <View styles={styles.container02}>
            <Button
              title="Click Me"
              onPress={btnTap}
              color="orange"
            />
      </View>    
      
      
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
  container02: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'lightgray',
  },
});
