import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Card from '../components/Card'

const CardList = ({cards}) => {
  return (
    <ScrollView
      horizontal={true}        // Ensure it scrolls horizontally
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      pagingEnabled={false} // Optionally hide the horizontal scroll indicator
     >
      {cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          desc={card.desc}
          price={card.price}
        />
      ))}
    </ScrollView>
  )
}

export default CardList

const styles = StyleSheet.create({
  container: {
    height: 255,
    width: 'auto',
  },
})