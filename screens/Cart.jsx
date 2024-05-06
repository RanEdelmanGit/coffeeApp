import { StyleSheet, Text, View, ScrollView } from "react-native";
import React, { useState } from "react";
import CartItem from "../components/CartItem";
import MenuAndProfile from "../components/MenuAndProfile";
import CheckOut from "../components/CheckOut";
import { data } from "../data";

const Cart = () => {
  const [cartItems, setCartItems] = useState(data.cards1);

  const handleValueChange = (itemId, sizeOrWeightId, newCount) => {
    const newCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        if (item.sizes) {
          item.sizes = item.sizes.map((size) =>
            size.id === sizeOrWeightId
              ? { ...size, count: newCount }
              : size
          );
        } else if (item.weight) {
          item.weight = item.weight.map((weight) =>
            weight.id === sizeOrWeightId
              ? { ...weight, count: newCount }
              : weight
          );
        }
      }
      return item;
    });
    setCartItems(newCartItems);
  };

  const getTotalAmount = () =>
    cartItems.reduce(
      (total, item) =>
        total +
        (item.sizes
          ? item.sizes.reduce(
              (sum, size) => sum + size.count * size.price,
              0
            )
          : item.weight
          ? item.weight.reduce(
              (sum, weight) => sum + weight.count * weight.price,
              0
            )
          : 0),
      0
    );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topNavContainer}>
        <MenuAndProfile title={"Cart"} />
      </View>
      <View style={[styles.cartItemContainer, { marginTop: 20 }]}>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} onValueChange={handleValueChange} />
        ))}
      </View>
      <CheckOut totalPrice={getTotalAmount()} />
    </ScrollView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#0C0F14",
  },
  topNavContainer: {
    marginTop: 60,
  },
  cartItemContainer: {
    flex: 1,
    alignItems: "center",
  },
});
