import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const Counter = ({ props, onValueChange}) => {

    const handleIncrease = () => onValueChange(props.id, props.value + 1);
    const handleDecrease = () => props.value > 0 && onValueChange(props.id, props.value - 1);

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <View style={styles.sizeContainer}><Text style={{ color: props.sizeColor, fontSize: props.sizeFontSize }}>{props.size}</Text></View>
                <View style={styles.priceContainer}>
                    <Text style={[styles.price, { color: 'white', fontSize: props.priceFontSize, fontWeight: 'bold' }]}>
                        <Text style={[styles.price, { color: '#D17842', fontSize: props.priceFontSize }]}>$</Text> {props.price.toFixed(2)}
                    </Text>
                </View>
            </View>
            <View style={styles.counterContainer}>
                <Pressable style={styles.countBtn} onPress={handleDecrease}><AntDesign name="minus" size={16} color="white" /></Pressable>
                <View style={styles.count}><Text style={{ color: 'white', fontSize: 18, fontWeight:'600' }}>{props.value}</Text></View>
                <Pressable style={styles.countBtn} onPress={handleIncrease}><AntDesign name="plus" size={16} color="white" /></Pressable>
            </View>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        minWidth: 305,
        maxWidth: 340,
        height: 'fit-content',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    counterContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        minWidth: 150,
        maxWidth: 295,
        marginVertical: 10,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        minWidth: 160,
        maxWidth: 295,
    },
    countBtn: {
        width: 30,
        height: 30,
        backgroundColor: '#D17842',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    count: {
        width: 50,
        height: 35,
        backgroundColor: '#0C0F14',
        borderRadius: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D17842',
    },
    sizeContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        maxWidth:85,
        minWidth: 70,
        height: 35,
        backgroundColor: '#0C0F14',
    },
    priceContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 'fit-content',
        height: 'fit-content',
    },
    price: {
        fontSize: 18, fontWeight: '600', marginHorizontal: 10,
    },
})