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
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import colors from 'src/themes/colors';

const CartScreen = ({navigation}) => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();

  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView style={{}}>
        <View style={{alignItems: 'center', height: 50}}>
          <Text style={[styles.PoppinsBold, {fontSize: 20}]}>My Cart</Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 16,
            height: 50,
            width: SCREEN_WIDTH - 36,
            marginBottom: 16,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingHorizontal: 16,
          }}>
          <Text>Select all</Text>
          <View style={{marginLeft: 10}}>
            <BouncyCheckbox
              size={25}
              fillColor={colors.PRIMARY}
              unFillColor="#FFFFFF"
              innerIconStyle={{borderWidth: 2}}
              onPress={isChecked => setSelection(isChecked)}
              isChecked={isSelected}
            />
          </View>
        </View>
        {productData.map(item => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Detail')}
              key={item.id}
              style={{
                backgroundColor: 'white',
                borderRadius: 16,
                height: 120,
                width: SCREEN_WIDTH - 36,
                marginBottom: 16,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Image
                source={item.image[0]}
                style={{
                  height: 90,
                  width: 90,
                  borderRadius: 10,
                  marginLeft: 16,
                }}
              />
              <View
                style={{
                  marginLeft: 16,
                  paddingRight: 120,
                  height: 90,
                  justifyContent: 'space-between',
                }}>
                <View style={{}}>
                  <Text
                    style={[styles.PoppinsMedium, {}]}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {item.title}
                  </Text>
                  <Text>{item.category}</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: SCREEN_WIDTH - 180,
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
                    <TouchableOpacity style={{width: 25, alignItems: 'center'}}>
                      <Text>-</Text>
                    </TouchableOpacity>
                    <View style={{width: 25, alignItems: 'center'}}>
                      <Text>{1}</Text>
                    </View>
                    <TouchableOpacity style={{width: 25, alignItems: 'center'}}>
                      <Text>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  PoppinsBold: {
    fontFamily: 'Poppins-Bold',
  },
  PoppinsMedium: {
    fontFamily: 'Poppins-Medium',
  },
});
