import { StyleSheet, Text, View, Pressable } from 'react-native'
import React,{useState} from 'react'

const Catagories = () => {
    const [selected, setSelected] = useState('All'); // Default selected category

    const categories = ['All', 'Cappuccino', 'Espresso', 'Americano', 'Macchiato'];

    function handlePress(category) {
        setSelected(category);
    }
    return (
        <View style={styles.container}>
        <View style={styles.buttonContainer}>
            {categories.map((category) => (
                <Pressable key={category} onPress={() => handlePress(category)}>
                    <Text style={[styles.coffeeText, selected === category && { color: "#D17842", fontWeight: "bold" }]}>
                        {category}
                    </Text>
                </Pressable>
            ))}
        </View>
    </View>
)
}

export default Catagories

const styles = StyleSheet.create({
    container:{
        width:'100%',
        paddingHorizontal:20
    },
    buttonContainer:{
        flexDirection:'row',
        width:'100%',
        height:50,
        columnGap:10
    },
    coffeeText:{
        color:'#535559',
        fontWeight:'700'
    }
})