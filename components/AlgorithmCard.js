import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

import AlgorithmDisplay from './AlgorithmDisplay';

const AlgorithmCard = ({ name, image, algorithm}) => {
    return (<View style={styles.container}>
        <View style={styles.nameContainer}><Text style={styles.name}>{name}</Text></View>
        <Image width={100} height={100} source={image}/>
        <AlgorithmDisplay algorithm={algorithm}/>
    </View>);
}

export default AlgorithmCard;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    nameContainer: {
        paddingVertical: 5,
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});