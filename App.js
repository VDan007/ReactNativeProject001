
import { StyleSheet, Text, View,SafeAreaView,
   Image,TouchableWithoutFeedback,TouchableOpacity,
   TouchableHighlight, Button, Alert,
   Platform, StatusBar,ImageBackground} from 'react-native';
   

export default function App() {

  

  return (
    <View style={ {backgroundColor: "white",
                  flex: 1,
                  } }>
      
      <ImageBackground
       source={require("./assets/background.jpg")} 
       style={{
        width: "100%",
        height: "100%",
       }
       }
      >           
      

          <View
            style={{
              borderWidth: 1,
              borderColor: "red"
            }}
          >
              <Image
                source={require("./assets/logo-red.png")}
                style={{
                  width: 50,
                  height: 50,

                }}
              >

              </Image>
          </View>
       </ImageBackground>     

    </View>
    

   
  );
}


