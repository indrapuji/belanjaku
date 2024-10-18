import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '@components/CustomHeader';
import DetailCarousel from '@components/DetailCarousel';

const DetailScreen = ({route}) => {
  const {data} = route.params;
  console.log(data);
  return (
    <View>
      <DetailCarousel data={data.image} />
      <CustomHeader />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
