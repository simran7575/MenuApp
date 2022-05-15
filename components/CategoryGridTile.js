import { View, Text, StyleSheet, Pressable, Platform } from 'react-native';
// we can use {useNavigation} hook as well

// navigation = useNavigation()
// create a component
const CategoryGridTile = ({title, color, onPress}) => {
    return (
        <View style={styles.outerContainer}>
            <Pressable 
            android_ripple={{color:"#ccc"}}
            style={({pressed})=> [styles.button, pressed ? styles.buttonPressed : null]}
            onPress={onPress}>
                <View style={[styles.innerContainer,{backgroundColor:color}]}>
                    <Text style={styles.buttonText}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
   outerContainer:{
       flex:1,
       margin:16,
       height:150,
       elevation:4,
       shadowColor:"black",
       shadowOffset:{'height':2, 'width':0},
       shadowOpacity:0.25,
       shadowRadius:8,
       borderRadius:8,
       backgroundColor:"white",
       overflow: Platform.OS === "android" ? 'hidden' : "visible" 
      },
   button:{
       flex:1
   },
   innerContainer:{
       flex:1,
       justifyContent:"center",
       alignItems:"center",
       padding:16,
       borderRadius:8
   },
   buttonText:{
    fontSize:20,
    fontFamily:"semi-bold"
   },
   buttonPressed:{
       opacity:0.5
   }

      
});

//make this component available to the app
export default CategoryGridTile;
