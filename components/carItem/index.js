import React from "react";
import { View,Text,ImageBackground } from "react-native";
import styles from './styles'
import StyledButton from '../styledButton';

const CarItem = (props) => {

  const {name, tagLine, tagLineCTA, image} = props;

    return (
        <View style={styles.carContainer}>
        <ImageBackground 
        source={image} 
        style = {styles.image}
        />
        <View style={styles.titles}>
          <Text style={styles.title} > {name} </Text>
          <Text style={styles.subtitle}> 
            {tagLine} 
            {' '}
            <Text style={styles.subtitleCTA} >
              {tagLineCTA}
            </Text> 
          </Text>
          <View style={styles.buttonsContainer} >
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
        
      </View>
    );
}

export default CarItem;
