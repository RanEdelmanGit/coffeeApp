import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Menu from '../components/Menu';
import Search from '../components/Search';
import Catagories from '../components/Catagories';
import CardList from '../components/CardList';
import { data } from '../data'


const Home = () => {
  const { cards1, cards2 } = data;
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.topNavContainer}>
        <Menu />
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Find the best coffee for you</Text>
      </View>
      <View style={styles.searchContainer}>
        <Search />
      </View>
      <View style={styles.catagoriesContainer}>
        <Catagories />
      </View>
      <View style={styles.coffeeContainer}>
        <CardList cards={cards1} />
      </View>
      <View style={styles.coffeeBeansContainer}>
        <Text style={styles.coffeeBeansText}>Coffee beans</Text>
        <CardList cards={cards2} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollView: {
    height: '100%',
    width: '100%',
    backgroundColor: '#0d0f14',
  },
  topNavContainer: {
    marginTop: 70,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    marginTop: 30,
    width: '80%',
  },
  headerText: {
    fontSize: 35,
    color: '#fff',
    fontWeight: '700',
    marginLeft: 30,
  },
  searchContainer: {
    width: '100%',
    paddingHorizontal: 25,
    marginTop: 35,
    marginBottom: 35,
    marginLeft: '2.5%',
  },
  catagoriesContainer: {
    width: '100%',
  },
  coffeeContainer: {
    width: '100%',
  },
  coffeeBeansContainer: {
    marginTop: 40,
    width: '100%',
    marginBottom: 50,
  },
  coffeeBeansText: {
    fontSize: 25,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 15,
    marginLeft: 30,
  },
});