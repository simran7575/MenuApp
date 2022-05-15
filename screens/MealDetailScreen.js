import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet , Image, ScrollView} from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetails/Subtitle';
import List from '../components/MealDetails/List';
import IconButton from '../components/IconButton';



const MealDetailScreen = ({route, navigation}) => {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find(meal => meal.id == mealId)

    const pressedIconButtonHandler = () =>{
        console.log("pressed");
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => {
                return(
                   <IconButton 
                   icon="star" 
                   color="white" 
                   onPress={pressedIconButtonHandler}/>
            )
        },
            title : selectedMeal.title
            
        });
    },[navigation, selectedMeal]

    )

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{uri : selectedMeal.imageUrl}} style={styles.image}/>
            <Text style={styles.titleText}>{selectedMeal.title}</Text>
            <MealDetails 
            duration={selectedMeal.duration}
            affordability={selectedMeal.affordability}
            complexity = {selectedMeal.complexity}
            textStyle={styles.detailStyles}/>
            <View style={styles.detailOuterContainer}>
            <View style={styles.detailInnerContainer}>
           <Subtitle>Ingredients</Subtitle>
           <List data={selectedMeal.ingredients}/>
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps}/>
            </View>
            </View>
        </ScrollView>
        
    );
};


const styles = StyleSheet.create({
    rootContainer:{
        marginBottom:32
    },
    detailStyles:{
        color:"white"
    },
    image:{
        width:"100%",
        height:350,
    },
    titleText:{
        fontFamily:"semi-bold",
        fontSize:24,
        textAlign:"center",
        margin:8,
        color:"white",
        letterSpacing:1
    },
    detailInnerContainer:{
        width:"80%"
    },
    detailOuterContainer:{
        alignItems:"center"
    }

   
});


export default MealDetailScreen;
