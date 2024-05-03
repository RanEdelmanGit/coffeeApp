import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Counter from './Counter';

const CartItem = ({ props, onValueChange, counters }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                {counters.length === 1 ? (
                    <Image style={[{ width: 145, height: 145, borderRadius: 10, marginRight: 10 }]} source={{ uri: props.image }} />
                ):(<Image style={styles.image} source={{ uri: props.image }} />)}
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.desc}>{props.desc}</Text>
                    {counters.length > 1 && (
                        <View style={styles.tag}>
                            <Text style={{ color: '#AEAEAE', fontSize: 12 }}>Medium Roasted</Text>
                        </View>
                    )}
                    <View style={styles.counterContainer}>
                        {counters.length === 1 && (
                            <Counter
                                key={counters[0].id}
                                props={counters[0]}
                                onValueChange={onValueChange}
                                counter={counters[0]}
                            />
                        )}
                    </View>
                </View>
            </View>
            {counters.length > 1 && (
                <View style={styles.bottomContainer}>
                    {counters.map((counter, index) => (
                        <Counter key={index} props={counter} onValueChange={onValueChange} counter={counter} />
                    ))}
                </View>
            )}
        </View>
    );
};

export default CartItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '90%',
        alignSelf: 'center',
        backgroundColor: '#252A32',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    topContainer: {
        flexDirection: 'row',
        width: '100%',
        height: 'fit-content',
        alignSelf: 'stretch',
        backgroundColor: '#252A32',
        paddingHorizontal: 15,
        paddingTop: 15,
        marginBottom: 5,
        borderRadius: 10,
    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    bottomContainer: {
        width: '100%',
        alignSelf: 'stretch',
        paddingHorizontal: 15,
    },
    counterContainer: {
        alignSelf: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'semibold',
        color: '#fff',
        marginBottom: 5,
    },
    desc: {
        color: '#AEAEAE',
        fontSize: 12,
        marginBottom: 20,
    },
    tag: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        width: 120,
        marginVertical: 10,
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: '#0C0F14',
    },
    image: {
        width: 130,
        height: 130,
        borderRadius: 10,
        marginRight: 10, // Ensure some spacing between the image and infoContainer
    },
});
