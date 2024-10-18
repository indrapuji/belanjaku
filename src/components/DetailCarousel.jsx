import React from 'react';
import {
  StyleSheet,
  View,
  useWindowDimensions,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';

import Swiper from 'react-native-swiper';
import productData from '@data/productData';
import colors from 'src/themes/colors';

const DetailCarousel = ({data}) => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();
  return (
    <View
      style={{
        height: SCREEN_WIDTH * (3 / 4),
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }}>
      <Swiper
        containerStyle={{backgroundColor: 'white'}}
        autoplay
        loop
        autoplayTimeout={5}
        removeClippedSubviews={false}
        activeDot={<View style={styles.dotsActive} />}
        dot={<View style={styles.dotsInactive} />}
        paginationStyle={{
          bottom: 35,
        }}>
        {data.map(item => {
          return (
            <TouchableOpacity key={item.id}>
              <View
                style={{
                  height: SCREEN_WIDTH * (3 / 4),
                  width: SCREEN_WIDTH,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={item}
                  style={{height: SCREEN_WIDTH * (3 / 4), width: SCREEN_WIDTH}}
                  resizeMode="cover"
                />
                <View style={{bottom: 80, width: SCREEN_WIDTH - 50}}>
                  <Text
                    style={{
                      color: 'white',
                      fontSize: 25,
                      fontWeight: '700',
                      textAlign: 'center',
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 3,
                      },
                      shadowOpacity: 0.27,
                      shadowRadius: 4.65,

                      elevation: 6,
                    }}></Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </Swiper>
    </View>
  );
};

export default DetailCarousel;

const styles = StyleSheet.create({
  dotsActive: {
    width: 18,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.PRIMARY,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    zIndex: 3,
  },
  dotsInactive: {
    width: 8,
    height: 8,
    borderRadius: 8,
    backgroundColor: colors.SECONDARY,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    zIndex: 3,
  },
});
