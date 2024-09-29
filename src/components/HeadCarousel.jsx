import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import React from 'react';
import Carousel from 'react-native-reanimated-carousel';

const HeadCarousel = () => {
  const {width} = useWindowDimensions();
  return (
    <View style={{marginVertical: 16}}>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={1000}
        // onSnapToItem={index => console.log('current index:', index)}
        renderItem={({index}) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              justifyContent: 'center',
            }}>
            <Text style={{textAlign: 'center', fontSize: 30}}>{index}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default HeadCarousel;

const styles = StyleSheet.create({});
