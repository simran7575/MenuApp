import { useLayoutEffect , useContext} from 'react';
import { View, Text, StyleSheet , Image, ScrollView} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetails/Subtitle';
import List from '../components/MealDetails/List';
import IconButton from '../components/IconButton';
import { FavouritesContext } from '../store/context/favourites-context';
import { addFavourite, removeFavourite } from '../store/redux/favourites';




const MealDetailScreen = ({route, navigation}) => {
    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find(meal => meal.id == mealId)

    const favouriteMealsCtx = useContext(FavouritesContext);
    // favoriteMealIds = useSelector((state) => state.favouriteMeaks.ids);
    // const dispatch = useDispatch();

    const isFavourite = favouriteMealsCtx.ids.includes(mealId);
    //const isFavourite = favouriteMealIds.includes(mealId);


    const changeFavouriteStatusHandler = () =>{
        if(isFavourite){
            favouriteMealsCtx.removeFavourites(mealId);
            //dispatch(removeFavourite({id: mealId}))
        }
        else{
            favouriteMealsCtx.addFavourites(mealId);
            // dispatch(addFavourite({id: mealId}))
        }
    }

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight: () => {
                return(
                   <IconButton 
                   icon={isFavourite ? "star" : "star-outline"}
                   color="white" 
                   onPress={changeFavouriteStatusHandler}/>
            )
        },
            title : selectedMeal.title
            
        });
    },[navigation, changeFavouriteStatusHandler]

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
        color:"#690821"
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
        color:"#690821",
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
