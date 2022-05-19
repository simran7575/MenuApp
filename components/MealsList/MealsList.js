import { View, FlatList, StyleSheet} from 'react-native';
import RenderMealsItem from './RenderMealsItem';

function MealsList({items}){

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


    return (
        <View style={styles.container}>
           <FlatList 
           data={items} 
           keyExtractor={item => item.id}
           renderItem={renderEachMealsItem}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:16
    },
});

export default MealsList;