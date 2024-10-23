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
import colors from 'src/themes/colors';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const CartScreen = ({navigation}) => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();

  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: 'white',
          paddingTop: 50,
          paddingBottom: 20,
          width: SCREEN_WIDTH,
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <Text style={[styles.PoppinsBold, {fontSize: 20}]}>My Cart</Text>
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
        <View
          style={{
            marginTop: 20,
            marginLeft: 16,
            flexDirection: 'row',
          }}>
          <BouncyCheckbox
            size={25}
            isChecked={checked}
            fillColor={colors.SECONDARY}
            unFillColor="#FFFFFF"
            innerIconStyle={{borderWidth: 2}}
            onPress={isChecked => {
              setChecked(isChecked);
            }}
          />
          <Text style={styles.PoppinsMedium}>Select all</Text>
        </View>

        {productData.map((item, index) => {
          return (
            <View>
              <View
                key={index}
                style={{
                  backgroundColor: 'white',
                  borderRadius: 16,
                  height: 120,
                  width: SCREEN_WIDTH - 36,

                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <View style={{marginLeft: 16, marginRight: -16}}>
                  <BouncyCheckbox
                    size={25}
                    fillColor={colors.SECONDARY}
                    isChecked={checked}
                    unFillColor="#FFFFFF"
                    innerIconStyle={{borderWidth: 2}}
                  />
                </View>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Detail', {
                      data: item,
                    })
                  }>
                  <Image
                    source={item.image[0]}
                    style={{
                      height: 90,
                      width: 90,
                      borderRadius: 10,
                      marginLeft: 16,
                    }}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    marginLeft: 16,
                    paddingRight: 120,
                    height: 90,
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    style={{}}
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

                    <Text>{item.category}</Text>
                  </TouchableOpacity>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      width: SCREEN_WIDTH - 180,
                      alignItems: 'center',
                    }}>
                    <Text>{formatRupiah(item.price)}</Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#def',
                        width: 75,
                        height: 25,
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderRadius: 10,
                      }}>
                      <TouchableOpacity
                        style={{width: 25, alignItems: 'center'}}>
                        <Text>-</Text>
                      </TouchableOpacity>
                      <View style={{width: 25, alignItems: 'center'}}>
                        <Text>{1}</Text>
                      </View>
                      <TouchableOpacity
                        style={{width: 25, alignItems: 'center'}}>
                        <Text>+</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
              {productData.length - 1 !== index && (
                <View
                  style={{
                    backgroundColor: 'gray',
                    height: 1,
                    marginLeft: 162,
                    marginRight: 16,
                    marginVertical: 8,
                  }}
                />
              )}
            </View>
          );
        })}
        <View style={{alignItems: 'center', marginTop: 20}}>
          <TouchableOpacity
            style={{
              marginBottom: 10,
              backgroundColor: colors.SECONDARY,
              height: 45,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 16,
              width: SCREEN_WIDTH - 32,
            }}>
            <Text style={styles.PoppinsBold}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CartScreen;

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
