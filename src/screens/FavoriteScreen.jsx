import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useState} from 'react';
import productData from '@data/productData';
import formatRupiah from '@utils/formatRupiah';
import {iphoneHasNotch} from '@utils/deviceinfo';
import FavProductCard from '@components/FavProductCard';

const FavoriteScreen = ({}) => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();

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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: 'white',
          width: SCREEN_WIDTH,
          marginTop: 10,
          paddingBottom: 20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <FavProductCard dataProduct={productData} />
        {/* {productData.map((item, index) => {
          return (
            <View key={index}>
              <View
                style={{
                  backgroundColor: 'white',
                  borderRadius: 16,
                  height: 150,
                  width: SCREEN_WIDTH - 36,

                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Detail', {
                      data: item,
                    })
                  }>
                  <Image
                    source={item.image[0]}
                    style={{
                      height: 110,
                      width: 110,
                      borderRadius: 10,
                      marginLeft: 16,
                    }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    marginLeft: 16,
                    paddingRight: 120,
                    height: 110,
                    justifyContent: 'space-between',
                  }}>
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('Detail', {
                          data: item,
                        })
                      }>
                      <Text
                        style={[
                          styles.PoppinsMedium,
                          {width: SCREEN_WIDTH - 180},
                        ]}
                        numberOfLines={1}
                        ellipsizeMode="tail">
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                    <Text>{item.category}</Text>
                    <Text>{formatRupiah(item.price)}</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => setChecked(!checked)}
                    style={{
                      padding: 5,
                      backgroundColor: checked ? 'yellow' : 'white',
                      borderRadius: 50,
                      alignItems: 'center',
                      width: 120,
                      borderWidth: 1,
                    }}>
                    <Text style={styles.PoppinsMedium}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
              {productData.length - 1 !== index && (
                <View
                  style={{
                    backgroundColor: 'gray',
                    height: 0.5,
                    marginLeft: 16,
                    marginRight: 16,
                    marginVertical: 8,
                  }}
                />
              )}
            </View>
          );
        })} */}
      </ScrollView>
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
