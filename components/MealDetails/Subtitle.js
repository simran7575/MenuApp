import {View , Text, StyleSheet} from 'react-native';

function Subtitle({children}){
    return(
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );

}
const styles=StyleSheet.create({
    subtitleContainer:{
        marginVertical:6,
        marginHorizontal:12,
        paddingHorizontal:4,
        paddingVertical: 8,
        borderBottomColor:"#edafaf",
        borderBottomWidth:2
    },
    subtitle:{
        fontFamily:"semi-bold",
        letterSpacing:1.5,
        fontSize:20,
        color:"#edafaf",
        textAlign:"center"
    }

})

export default Subtitle;


