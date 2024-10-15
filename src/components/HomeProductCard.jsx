import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import formatRupiah from '@utils/formatRupiah';
import {useNavigation} from '@react-navigation/native';

const HomeProductCard = ({dataProduct}) => {
  const navigation = useNavigation();
  const {width: SCREEN_WIDTH} = useWindowDimensions();
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}>
      {dataProduct &&
        dataProduct.map((item, i) => {
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate('Detail')}>
              <View
                style={{
                  marginTop: 16,
                  marginBottom: i + 1 === dataProduct.length ? 16 : 0,
                  marginLeft: i % 2 !== 0 ? 16 : 0,
                  borderRadius: 16,
                  shadowOpacity: 0.2,
                  position: 'relative',
                }}>
                <Image
                  source={item.image[0]}
                  style={{
                    width: (SCREEN_WIDTH - 16 * 3) / 2,
                    height: 180,
                    borderRadius: 16,
                    opacity: 0.7,
                  }}
                  resizeMode="cover"
                />

                <View
                  style={{
                    position: 'absolute',
                    bottom: 10,
                    left: 10,
                    width: (SCREEN_WIDTH - 30 * 3) / 2,
                  }}>
                  <Text
                    style={{
                      fontWeight: '700',
                      fontSize: 15,
                      shadowColor: 'white',
                      shadowOffset: {width: 2, height: 2},
                      shadowOpacity: 1,
                      shadowRadius: 1,
                    }}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      fontWeight: 'bold',
                      shadowColor: 'white',
                      shadowOffset: {width: 2, height: 2},
                      shadowOpacity: 1,
                      shadowRadius: 1,
                    }}>
                    {formatRupiah(item.price)}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
    </View>
  );
};

export default HomeProductCard;

const styles = StyleSheet.create({});
