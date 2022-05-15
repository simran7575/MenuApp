import { View, Text, StyleSheet, Pressable , Image, Platform} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetails from './MealDetails';

const RenderMealsItem = ({id, title, imageUrl, duration, affordability, complexity}) => {
    
    const navigation = useNavigation();

    function handleNavigation(){
       navigation.navigate("MealDetails", {mealId : id});
    }

    return (
        <View style={styles.outerContainer}>
            <Pressable android_ripple={{color:"#ccc"}} onPress={handleNavigation}
                style={({pressed})=> pressed ? styles.buttonClicked : null}>
                <View style={styles.innerContainer}>
                <View>
                    <Image source={{uri:imageUrl}} style={styles.image}/>
                    <Text style={styles.text}>{title}</Text>
                </View>
               <MealDetails duration={duration} affordability={affordability} complexity={complexity}/>
                </View>
            </Pressable>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    outerContainer:{
        margin:16,
        padding:12,
        borderRadius:8,
        elevation:5,
        shadowColor:"black",
        shadowOffset:{'height':2, 'width':0},
        shadowOpacity:0.25,
        shadowRadius:8,
        backgroundColor:"white",
        overflow: Platform.OS == "android" ? "hidden" : "visible"
    },
    buttonClicked:{
        opacity: 0.5
    },

    image:{
        width:"100%",
        height:200
    },
    text:{
        fontFamily:"normal",
        fontSize:18,
        margin:8,
        textAlign:"center"
    },
    innerContainer:{
        borderRadius:8,
        overflow:"hidden"
    },
   
  
});

//make this component available to the app
export default RenderMealsItem;
