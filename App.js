
import { StyleSheet, Text, View,SafeAreaView,
   Image,TouchableWithoutFeedback,TouchableOpacity,
   TouchableHighlight, Button, Alert,
   Platform, StatusBar,ImageBackground,} from 'react-native';
   

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
              alignItems: "center",
              top: 80,
              
            }}
          >
              <Image
                source={require("./assets/logo-red.png")}
                style={{
                  width: 80,
                  height: 80,

                }}
              >

              </Image>
              <Text>Sell What You Don't Need</Text>
          </View>

        <View
            style={{
              position: "absolute",
              bottom:0,
              left:0,
              width: "100%"
            }}
          >      
            <View
              style={{
                backgroundColor: "#fc5c65",
                height: 65,
                
              }}
            >

            </View>

            <View
              style={{
                backgroundColor: "#4ECDC4",
                height: 65,
              }}
            >

            </View>
        </View>  


       </ImageBackground>     

    </View>
    

   
  );
}


