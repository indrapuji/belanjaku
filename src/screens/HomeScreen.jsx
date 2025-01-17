import {
  StyleSheet,
  Text,
  View,
  Animated,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';

// Component List
import SearchField from '@components/SearchField';
import HeadCarousel from '@components/HeadCarousel';
import Categories from '@components/Categories';
import HomeProductCard from '@components/HomeProductCard';

// Util List
import {iphoneHasNotch} from '@utils/deviceinfo';

// Data List
import typeData from '@data/typeData';
import productData from '@data/productData';

const HomeScreen = ({navigation}) => {
  const [index, setIndex] = useState(1);
  const [loading, setLoading] = useState(true);
  const scroll = useRef(new Animated.Value(0)).current;

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <Animated.View
        style={[
          styles.searchContainer,
          {
            opacity: scroll.interpolate({
              inputRange: [0, 10, 200],
              outputRange: [0, 0, 1],
              extrapolate: 'clamp',
            }),
          },
        ]}
      />
      <View style={styles.searchPosition}>
        <View style={styles.SearchSize}>
          <SearchField
            onPress={() => navigation.navigate('Search')}
            ontouch={() => console.log('Notif')}
          />
        </View>
      </View>
      <Animated.ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scroll}}}],
          {
            useNativeDriver: true,
          },
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}>
        <HeadCarousel />

        <Categories />

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={typeData}
          keyExtractor={item => item.id.toString()}
          style={{paddingHorizontal: 16}}
          renderItem={({item, index: findex}) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={{
                  paddingLeft: findex === 0 ? 0 : 16,
                  paddingRight: findex === typeData.length - 1 ? 32 : 0,
                }}
                onPress={() => setIndex(findex)}>
                <Text
                  style={{
                    fontSize: findex === index ? 37 : 35,
                    fontFamily: 'Tahoma',
                    letterSpacing: -2,
                    fontWeight: '900',
                    color: findex === index ? 'black' : 'gray',
                  }}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />

        <HomeProductCard dataProduct={productData} />
      </Animated.ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  searchContainer: {
    position: 'absolute',
    height: 116,
    backgroundColor: '#FFF',
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 2,
  },
  SearchSize: {
    flex: 1,
  },
  searchPosition: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    paddingTop: iphoneHasNotch ? 32 : 10,
    backgroundColor: 'transparent',
    top: 20,
    left: 0,
    right: 0,
    zIndex: 10,
  },
});
