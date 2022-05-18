import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { MEALS } from '../data/dummy-data';
import { CATEGORIES } from '../data/dummy-data';
import RenderMealsItem from '../components/RenderMealsItem';
//import { useRoute } from '@react-navigation/native';

const MealsOverview = ({ route , navigation}) => {
    const catId = route.params.categoryId;

    const includedMeals = MEALS.filter(mealItem => {
        return mealItem.categoryIds.indexOf(catId)>=0;
    })



    function renderEachMealsItem(itemData){
        const item = itemData.item;
        const Mealdetails = {
            id : item.id,
            title: item.title,
            imageUrl: item.imageUrl,
            duration : item.duration,
            affordability: item.affordability,
            complexity : item.complexity,
        };
        return(
        <RenderMealsItem  {...Mealdetails} />
        )
    }

  
    useLayoutEffect(()=>{
        const mealTitle = CATEGORIES.find(
        (category) => category.id == catId
        ).title;

        navigation.setOptions({
            title: mealTitle,
            headerTitleStyle:{letterSpacing:1.5}

        });
    },[catId, navigation ]);


    return (
        <View style={styles.container}>
           <FlatList 
           data={includedMeals} 
           keyExtractor={item => item.id}
           renderItem={renderEachMealsItem}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:16
    },
});

//make this component available to the app
export default MealsOverview;
