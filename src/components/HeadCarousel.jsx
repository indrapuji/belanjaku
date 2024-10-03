import {StyleSheet, useWindowDimensions, View, Image} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';
import bannerData from '@data/bannerData';

const HeadCarousel = () => {
  const {width} = useWindowDimensions();

  return (
    <View style={{marginVertical: 16}}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={bannerData}
        scrollAnimationDuration={1000}
        renderItem={({item}) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
            }}>
            <Image
              source={item.image}
              resizeMode="cover"
              style={{width: width, height: width / 2}}
            />
          </View>
        )}
      />
    </View>
  );
};

export default HeadCarousel;

const styles = StyleSheet.create({});
