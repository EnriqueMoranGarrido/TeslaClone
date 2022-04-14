import React from "react";
import { View,Text,ImageBackground } from "react-native";
import styles from './styles'
import StyledButton from '../styledButton';

const CarItem = (props) => {
    return (
        <View style={styles.carContainer}>
        <ImageBackground 
        source={require('../../assets/images/ModelX.jpeg')} 
        style = {styles.image}
        />
        <View style={styles.titles}>
          <Text style={styles.title} > Model S </Text>
          <Text style={styles.subtitle}> Starting at $60,000 </Text>
          <StyledButton 
            type = "primary" 
            content = "custom order"
            onPress = {() =>{
                console.warn("order button was pressed");
            }}  
            />
          <StyledButton 
            type = "secondary" 
            content = "existing inventory"
            onPress = {() =>{
                console.warn("inventory button was pressed");
            }}  
            />
        </View>
        
      </View>
    );
}

export default CarItem;
