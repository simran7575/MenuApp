import {View , Text, StyleSheet} from 'react-native';

function List({data}){
    return(
    data.map(dataPoint=>(
            <View key={dataPoint} style={styles.listContainer}>
                <Text style={styles.listItem}>{dataPoint}</Text>
            </View>)))}
 


const styles=StyleSheet.create({
    listContainer:{
        borderRadius:8,
        backgroundColor:"#edafaf",
        paddingHorizontal:24,
        paddingVertical:10,
        marginHorizontal:12,
        marginVertical:4,
    },
    listItem:{
        textAlign:"center",
        fontFamily:"walkway-oblique-ultrabold",
        fontSize:17,
        color:"white",
        letterSpacing:1.5
    }
})

export default List;

