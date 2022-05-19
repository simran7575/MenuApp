import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';
import { MEALS } from '../data/dummy-data';
import { CATEGORIES } from '../data/dummy-data';

//import { useRoute } from '@react-navigation/native';

const MealsOverview = ({ route , navigation}) => {
    const catId = route.params.categoryId;

    const includedMeals = MEALS.filter(mealItem => {
        return mealItem.categoryIds.indexOf(catId)>=0;
    })

    useLayoutEffect(()=>{
        const mealTitle = CATEGORIES.find(
        (category) => category.id == catId
        ).title;

        navigation.setOptions({
            title: mealTitle,
            headerTitleStyle:{letterSpacing:1.5}

        });
    },[catId, navigation ]);

    return(
        <MealsList items={includedMeals}/>
    )



   
};




export default MealsOverview;
