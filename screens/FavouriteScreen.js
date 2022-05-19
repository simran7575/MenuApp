import {useContext} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import { FavouritesContext } from '../store/context/favourites-context';
import { MEALS } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';
import { useSelector } from 'react-redux';



const FavouriteScreen = () => {

    const favouriteMeals = useContext(FavouritesContext);
    // const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids)
    const allFavouriteMeals = MEALS.filter(meal => favouriteMeals.ids.includes(meal.id));
//    const allFavouriteMeals = MEALS.filter(meal => favouriteMealsIds.includes(meal.id));

    if(allFavouriteMeals.length == 0){
        return(
            <View style={styles.container}>
                <Image source={require('../assets/empty-list.png')} style={styles.image}/>
                <Text style={styles.text}>You don't have any favourite meal yet.</Text>
            </View>
        )
    }
    return (
        <MealsList items={allFavouriteMeals}/>
       
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        padding:24,
      
    },
    image:{
        width:300,
        height:300,
        margin:24
    },
    text:{
        fontFamily:"semi-bold",
        fontSize:20,
        letterSpacing:1.2,
        color:"#690821",
        textAlign:"center"
  
    }
})


export default FavouriteScreen;
