import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CartItem from '../components/CartItem';
import Menu from '../components/Menu';
import CheckOut from '../components/CheckOut';
import { data } from '../data';

const Cart = () => {
  const { cards1: items1, cards2: items2 } = data;

  const initialCounters = [
    { id: 1, value: 0, price: 4.20, size: 'S', sizeColor: 'white', sizeFontSize: 18, priceFontSize: 20 },
    { id: 2, value: 0, price: 5.20, size: 'M', sizeColor: 'white', sizeFontSize: 18, priceFontSize: 20 },
    { id: 3, value: 0, price: 6.20, size: 'L', sizeColor: 'white', sizeFontSize: 18, priceFontSize: 20 },
    { id: 4, value: 0, price: 6.20, size: 'M', sizeColor: 'white', sizeFontSize: 18, priceFontSize: 25 },
    { id: 5, value: 0, price: 5.20, size: '250gm', sizeColor: '#AEAEAE', sizeFontSize: 12, priceFontSize: 25 },
    { id: 6, value: 0, price: 4.20, size: '250gm', sizeColor: '#AEAEAE', sizeFontSize: 12, priceFontSize: 20 },
    { id: 7, value: 0, price: 5.20, size: '500gm', sizeColor: '#AEAEAE', sizeFontSize: 12, priceFontSize: 20 },
    { id: 8, value: 0, price: 7.20, size: '1kg', sizeColor: '#AEAEAE', sizeFontSize: 12, priceFontSize: 20 },
  ];

  const [counters, setCounters] = useState(initialCounters);

  const handleValueChange = (id, newValue) => {
    const newCounters = counters.map(counter =>
      counter.id === id ? { ...counter, value: newValue } : counter
    );
    setCounters(newCounters);
  };

  const getTotalAmount = () => counters.reduce((total, counter) => total + (counter.value * counter.price), 0);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topNavContainer}>
        <Menu />
      </View>
      <View style={[styles.cartItemContainer, { marginTop: 20 }]}>
        <CartItem item={items1[0]} onValueChange={handleValueChange} counters={counters.slice(0, 3)} />
      </View>
      <View style={[styles.cartItemContainer, { marginTop: 20 }]}>
        <CartItem item={items1[1]} onValueChange={handleValueChange} counters={counters.slice(3, 4)} />
      </View>
      <View style={[styles.cartItemContainer, { marginTop: 20 }]}>
        <CartItem item={items1[2]} onValueChange={handleValueChange} counters={counters.slice(4, 5)} />
      </View>
      <View style={[styles.cartItemContainer, { marginTop: 20 }]}>
        <CartItem item={items1[3]} onValueChange={handleValueChange} counters={counters.slice(5, 8)} />
      </View>
      <View style={[styles.cartItemContainer, { marginVertical: 40 }]}>
       <CheckOut totalPrice={getTotalAmount()} />
      </View>
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0C0F14',
  },
  topNavContainer: {
    marginTop: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartItemContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
