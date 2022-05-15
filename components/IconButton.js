import {Text, Pressable, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function IconButton({icon, color, onPress}){
    return(
        <Pressable onPress={onPress} style={({pressed})=> pressed && styles.tapedbutton}>
            <Ionicons size={24} color={color} name={icon}/> 
           
        </Pressable>
    )

}

const styles=StyleSheet.create({
  tapedbutton:{
      opacity:0.25
  }
})

export default IconButton;

