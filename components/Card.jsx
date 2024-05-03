import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

const Card = (props) => {
  return (

    <View style={styles.container}>
      <View>
        <Image source={{ uri: props.image }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.desc}>{props.desc}</Text>
      </View>
      <View style={styles.priceContainer}>
        <Text style={styles.price}><Text style={{ color: '#D17842'}}>$ </Text>{props.price}</Text>
        <Pressable style={styles.button}><AntDesign name="plus" size={16} color="#fff" /></Pressable>
      </View>
    </View>

  )
}

export default Card

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    height: 'auto',
    width: 155,
    marginHorizontal: 10,
    backgroundColor: '#252A32',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  image: {
    width: 130,
    height: 130,
    borderRadius: 10,
    marginBottom: 10,
    marginTop:5
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    
  },
  desc: {
    color: '#fff',
    fontSize: 12,
  },
  infoContainer: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'start',
    paddingLeft: 10,
    marginBottom: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    height: 40,
    backgroundColor: '#252A32',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  button: {
    width: 30,
    height: 30,
    backgroundColor: '#D17842',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
})