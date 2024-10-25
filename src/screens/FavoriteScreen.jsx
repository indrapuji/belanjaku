import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import productData from '@data/productData';
import formatRupiah from '@utils/formatRupiah';
import {iphoneHasNotch} from '@utils/deviceinfo';
import FavProductCard from '@components/FavProductCard';

const FavoriteScreen = ({}) => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();

  const renderHeader = () => {
    return (
      <View
        style={{
          backgroundColor: 'white',
          width: SCREEN_WIDTH,
          marginTop: 10,
          paddingBottom: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'white',
          paddingTop: iphoneHasNotch ? 50 : 20,
          paddingBottom: 20,
          width: SCREEN_WIDTH,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <Text style={[styles.PoppinsBold, {fontSize: 20}]}>Wishlist</Text>
      </View>

      <FlatList
        data={productData}
        keyExtractor={(key, i) => i.toString()}
        renderItem={({item}) => <FavProductCard item={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
};

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  PoppinsBold: {
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
  PoppinsMedium: {
    fontFamily: 'Poppins-Medium',
  },
});
