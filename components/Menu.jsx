import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Menu = () => {
    return (
            <View style={styles.container}>
                <View style={styles.iconContainer}>
                    <Image style={styles.menuIcon} source={require('../assets/menu.png')} />
                </View>
                <View>
                    <Image style={styles.userImage} source={require('../assets/user.png')} />
                </View>
            </View>
    )
}

export default Menu

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'80%',
        height:40,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconContainer:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#151920',
        height:35,
        width:35,
        borderRadius:10,
        borderWidth:1,
        borderColor:'#22262c'
    },
    menuIcon: {
        width: 25,
        height: 25,
        alignSelf: 'center',
        borderRadius: 8,
        marginVertical:10,
    },
    userImage:{
        width: 35,
        height: 35,
        marginVertical:10,
    },
})