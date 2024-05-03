import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const Search = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.searchBar} placeholder='search' placeholderTextColor={'#8e8e93'}>
        <FontAwesome  name="search" size={20} color="gray" />
      </TextInput>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
    container: {
    width:'100%',
    justifyContent:'center',
    height:50,
  },
    searchBar: {
    height: 50,
    width: '95%',
    borderRadius: 15,
    backgroundColor: '#151920',
    fontSize: 16,
    padding:15,
    color:'#fff',
  },
  icon:{
    padding:10,
  }
})