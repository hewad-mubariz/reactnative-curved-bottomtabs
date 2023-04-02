import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Products = () => {
  return (
    <View style={styles.container}>
      <Text>Products</Text>
    </View>
  );
};

export default Products;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
