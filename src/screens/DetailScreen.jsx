import {
  StyleSheet,
  Text,
  View,
  Animated,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useRef} from 'react';
import CustomHeader from '@components/CustomHeader';
import DetailCarousel from '@components/DetailCarousel';
import formatRupiah from '@utils/formatRupiah';
import colors from 'src/themes/colors';
import LargeButton from '@components/LargeButton';

const DetailScreen = ({route}) => {
  const {width: SCREEN_WIDTH} = useWindowDimensions();
  const {data} = route.params;
  const scroll = useRef(new Animated.Value(0)).current;
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scroll}}}],
          {
            useNativeDriver: true,
          },
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}>
        <Animated.View
          style={[
            {
              height: SCREEN_WIDTH * (3 / 4),
              width: SCREEN_WIDTH,
            },
            {
              transform: [
                {
                  translateY: scroll.interpolate({
                    inputRange: [
                      -SCREEN_WIDTH,
                      0,
                      SCREEN_WIDTH,
                      SCREEN_WIDTH + 1,
                    ],
                    outputRange: [
                      -SCREEN_WIDTH / 2,
                      0,
                      SCREEN_WIDTH * 0.75,
                      SCREEN_WIDTH * 0.75,
                    ],
                  }),
                },
                {
                  scale: scroll.interpolate({
                    inputRange: [-SCREEN_WIDTH, 0],
                    outputRange: [2 * 1.5, 1],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}>
          <DetailCarousel data={data.image} />
          <CustomHeader />
        </Animated.View>
        <View
          style={{
            paddingHorizontal: 16,
          }}>
          <View style={{marginTop: 20}}>
            <Text style={[styles.PoppinsBold, {fontSize: 25, color: 'black'}]}>
              {data.title}
            </Text>
            <View style={{marginVertical: 10}}>
              <Text
                style={[styles.PoppinsMedium, {fontSize: 16, color: 'black'}]}>
                {formatRupiah(data.price)}
              </Text>
            </View>
            <View
              style={{
                marginTop: 20,
                marginBottom: 10,
                backgroundColor: colors.SECONDARY,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 16,
              }}>
              <Text style={{color: 'black'}}>Description</Text>
            </View>
            <View style={{marginVertical: 10}}>
              <Text style={{textAlign: 'justify', color: 'black'}}>
                {data.description}
              </Text>
            </View>
          </View>
        </View>
      </Animated.ScrollView>
      <View
        style={{
          marginBottom: 30,
          marginHorizontal: 16,
          backgroundColor: 'black',
          height: 65,
          zIndex: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          alignItems: 'center',
          borderRadius: 50,
        }}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#def',
              width: 90,
              height: 35,
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: 50,
            }}>
            <TouchableOpacity style={{width: 30, alignItems: 'center'}}>
              <Text style={{color: 'black'}}>-</Text>
            </TouchableOpacity>
            <View style={{width: 30, alignItems: 'center'}}>
              <Text style={{color: 'black'}}>{1}</Text>
            </View>
            <TouchableOpacity style={{width: 30, alignItems: 'center'}}>
              <Text style={{color: 'black'}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: colors.SECONDARY,
            height: 45,
            borderRadius: 50,
            width: SCREEN_WIDTH / 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={styles.PoppinsBold}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  PoppinsBold: {
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
  PoppinsMedium: {
    fontFamily: 'Poppins-Medium',
    color: 'black',
  },
});
