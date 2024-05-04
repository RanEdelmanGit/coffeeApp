import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import Counter from './Counter';

const CartItem = ({ item, onValueChange, counters }) => {

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                {counters.length === 1 ? (
                    <Image style={[{ width: 145, height: 145, borderRadius: 10, marginRight: 10 }]} source={{ uri: item.image }} />
                ) : (
                    <Image style={styles.image} source={{ uri: item.image }} />
                )}
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.desc}>{item.desc}</Text>
                    {counters.length > 1 && (
                        <View style={styles.tag}>
                            <Text style={{ color: '#AEAEAE', fontSize: 12 }}>Medium Roasted</Text>
                        </View>
                    )}
                    <View style={styles.counterContainer}>
                        {counters.length === 1 && (
                            <Counter
                                {...counters[0]}
                                onValueChange={onValueChange}
                            />
                        )}
                    </View>
                </View>
            </View>
            {counters.length > 1 && (
                <View style={styles.bottomContainer}>
                    {counters.map(counter => (
                        <Counter key={counter.id} {...counter} onValueChange={onValueChange} />
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
        marginRight: 10, 
    },
});

