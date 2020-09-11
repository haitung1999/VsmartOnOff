import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import CountDown from 'react-native-countdown-component';
import Button from '../../components/Button';
import Countdown from '../../components/Countdown';

export default function Item({ item }) {
    return (
        <View style={styles.container}>
            <View style={styles.titleContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Image source={item.image1} style={styles.image1} />
            </View>
            <Countdown />
            <Button title="Bắt đầu" />
            <TouchableOpacity style={styles.image}>
                <Image source={item.image} style={styles.image} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 300,
        margin: 8,
        borderStyle: "dashed",
        borderWidth: 2,
        borderColor: 'red',
    },
    titleContent: {
        flexDirection: 'row',
        margin: 5,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    image1: {
        height: 30,
        width: 30,
        borderRadius: 30
    },
    image: {
        height: 60,
        width: 60,
        alignSelf: 'center',
    }
})
