import {Text, View, StyleSheet} from 'react-native';


function MealDetails({duration, affordability, complexity, style, textStyle}){
    return(
        <View style={[styles.details,style]}>
            <Text style={[styles.detailText, textStyle]}>{duration}m</Text>
            <Text style={[styles.detailText, textStyle]}>{affordability.toUpperCase()}</Text>
            <Text style={[styles.detailText, textStyle]}>{complexity.toUpperCase()}</Text>
        </View>
    )

}

const styles= StyleSheet.create({
    details:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
    },
    detailText:{
        marginHorizontal:8,
        fontSize:12,
        fontFamily:"normal",
        letterSpacing:1.2
    }
})


export default MealDetails;