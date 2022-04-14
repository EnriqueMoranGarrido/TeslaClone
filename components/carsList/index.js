import React from 'react';
import { View,Text,FlatList,Dimensions } from 'react-native';

import styles from './styles';
import cars from './cars'

import CarItem from '../carItem';

const CarsList = (props) => {
    return (
        <View style={styles.container} >
            <FlatList 
                data = {cars}
                renderItem = {({item}) => <CarItem 
                                            name={item.name} 
                                            tagLine = {item.tagline} 
                                            tagLineCTA = {item.taglineCTA} 
                                            image={item.image} />}
                showsVerticalScrollIndicator = {false}
                snapToAlignment = {'start'}
                decelerationRate = {'fast'}
                snapToInterval = {Dimensions.get('window').height}
            />
        </View>
    );
};

export default CarsList;